package influxdb

import (
	"context"
	"errors"
	"fmt"

	"github.com/influxdata/flux"
	"github.com/influxdata/flux/execute"
	"github.com/influxdata/flux/memory"
	"github.com/influxdata/flux/plan"
	platform "github.com/influxdata/influxdb"
	"github.com/influxdata/influxdb/kit/tracing"
	"github.com/influxdata/influxdb/query"
	"github.com/influxdata/influxdb/tsdb/cursors"
)

func init() {
	execute.RegisterSource(ReadRangePhysKind, createReadFilterSource)
}

type runner interface {
	run(ctx context.Context) error
}

type Source struct {
	id execute.DatasetID
	ts []execute.Transformation

	alloc *memory.Allocator
	stats cursors.CursorStats

	runner runner
}

func (s *Source) Run(ctx context.Context) {
	err := s.runner.run(ctx)
	for _, t := range s.ts {
		t.Finish(s.id, err)
	}
}

func (s *Source) AddTransformation(t execute.Transformation) {
	s.ts = append(s.ts, t)
}

func (s *Source) Metadata() flux.Metadata {
	return flux.Metadata{
		"influxdb/scanned-bytes":  []interface{}{s.stats.ScannedBytes},
		"influxdb/scanned-values": []interface{}{s.stats.ScannedValues},
	}
}

func (s *Source) processTables(ctx context.Context, tables TableIterator, watermark execute.Time) error {
	err := tables.Do(func(tbl flux.Table) error {
		for _, t := range s.ts {
			if err := t.Process(s.id, tbl); err != nil {
				return err
			}
			//TODO(nathanielc): Also add mechanism to send UpdateProcessingTime calls, when no data is arriving.
			// This is probably not needed for this source, but other sources should do so.
			if err := t.UpdateProcessingTime(s.id, execute.Now()); err != nil {
				return err
			}
		}
		return nil
	})
	if err != nil {
		return err
	}

	// Track the number of bytes and values scanned.
	stats := tables.Statistics()
	s.stats.ScannedValues += stats.ScannedValues
	s.stats.ScannedBytes += stats.ScannedBytes

	for _, t := range s.ts {
		if err := t.UpdateWatermark(s.id, watermark); err != nil {
			return err
		}
	}
	return nil
}

type readFilterSource struct {
	Source
	reader   Reader
	readSpec ReadFilterSpec
}

func ReadFilterSource(id execute.DatasetID, r Reader, readSpec ReadFilterSpec, alloc *memory.Allocator) execute.Source {
	src := new(readFilterSource)

	src.id = id
	src.alloc = alloc

	src.reader = r
	src.readSpec = readSpec

	src.runner = src
	return src
}

func (s *readFilterSource) run(ctx context.Context) error {
	stop := s.readSpec.Bounds.Stop
	tables, err := s.reader.ReadFilter(
		ctx,
		s.readSpec,
		s.alloc,
	)
	if err != nil {
		return err
	}
	return s.processTables(ctx, tables, stop)
}

func createReadFilterSource(s plan.ProcedureSpec, id execute.DatasetID, a execute.Administration) (execute.Source, error) {
	span, ctx := tracing.StartSpanFromContext(context.TODO())
	defer span.Finish()

	spec := s.(*ReadRangePhysSpec)

	bounds := a.StreamContext().Bounds()
	if bounds == nil {
		return nil, errors.New("nil bounds passed to from")
	}

	deps := a.Dependencies()[FromKind].(Dependencies)

	req := query.RequestFromContext(a.Context())
	if req == nil {
		return nil, errors.New("missing request on context")
	}

	orgID := req.OrganizationID
	var bucketID platform.ID
	// Determine bucketID
	switch {
	case spec.Bucket != "":
		b, ok := deps.BucketLookup.Lookup(ctx, orgID, spec.Bucket)
		if !ok {
			return nil, fmt.Errorf("could not find bucket %q", spec.Bucket)
		}
		bucketID = b
	case len(spec.BucketID) != 0:
		err := bucketID.DecodeFromString(spec.BucketID)
		if err != nil {
			return nil, err
		}
	}

	return ReadFilterSource(
		id,
		deps.Reader,
		ReadFilterSpec{
			OrganizationID: orgID,
			BucketID:       bucketID,
			Bounds:         *bounds,
		},
		a.Allocator(),
	), nil
}
