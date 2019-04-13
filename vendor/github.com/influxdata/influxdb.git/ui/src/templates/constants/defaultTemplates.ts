export const systemTemplate = () => ({
  meta: {
    version: '1',
    name: 'System-Template',
    description: 'Dashboard template for the system telegraf plugin',
  },
  content: {
    data: {
      type: 'dashboard',
      attributes: {
        name: 'System',
        description:
          'A collection of useful visualizations for monitoring your system stats',
      },
      relationships: {
        label: {
          data: [],
        },
        cell: {
          data: [
            {
              type: 'cell',
              id: '039d8c0b62c34000',
            },
            {
              type: 'cell',
              id: '039d8c0b63434000',
            },
            {
              type: 'cell',
              id: '039d8c0b63c34000',
            },
            {
              type: 'cell',
              id: '039d8c0b64034000',
            },
            {
              type: 'cell',
              id: '039d8c0b64c34000',
            },
            {
              type: 'cell',
              id: '039d8c0b65034000',
            },
            {
              type: 'cell',
              id: '039d8c0b65834000',
            },
            {
              type: 'cell',
              id: '039d8c0b66034000',
            },
            {
              type: 'cell',
              id: '039d8c0b66834000',
            },
            {
              type: 'cell',
              id: '039d8c0b67034000',
            },
            {
              type: 'cell',
              id: '039d8c0b67434000',
            },
            {
              type: 'cell',
              id: '039d8c0b67c34000',
            },
            {
              type: 'cell',
              id: '039d8c0b68434000',
            },
          ],
        },
        variable: {
          data: [
            {
              type: 'variable',
              id: '0399e8fd61294000',
            },
          ],
        },
      },
    },
    included: [
      {
        id: '039d8c0b62c34000',
        type: 'cell',
        attributes: {
          x: 0,
          y: 0,
          w: 12,
          h: 1,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b62c34000',
            },
          },
        },
      },
      {
        id: '039d8c0b63434000',
        type: 'cell',
        attributes: {
          x: 0,
          y: 1,
          w: 3,
          h: 1,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b63434000',
            },
          },
        },
      },
      {
        id: '039d8c0b63c34000',
        type: 'cell',
        attributes: {
          x: 3,
          y: 1,
          w: 2,
          h: 1,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b63c34000',
            },
          },
        },
      },
      {
        id: '039d8c0b64034000',
        type: 'cell',
        attributes: {
          x: 5,
          y: 1,
          w: 2,
          h: 1,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b64034000',
            },
          },
        },
      },
      {
        id: '039d8c0b64c34000',
        type: 'cell',
        attributes: {
          x: 7,
          y: 1,
          w: 2,
          h: 1,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b64c34000',
            },
          },
        },
      },
      {
        id: '039d8c0b65034000',
        type: 'cell',
        attributes: {
          x: 0,
          y: 2,
          w: 3,
          h: 3,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b65034000',
            },
          },
        },
      },
      {
        id: '039d8c0b65834000',
        type: 'cell',
        attributes: {
          x: 3,
          y: 2,
          w: 3,
          h: 3,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b65834000',
            },
          },
        },
      },
      {
        id: '039d8c0b66034000',
        type: 'cell',
        attributes: {
          x: 6,
          y: 2,
          w: 3,
          h: 3,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b66034000',
            },
          },
        },
      },
      {
        id: '039d8c0b66834000',
        type: 'cell',
        attributes: {
          x: 9,
          y: 1,
          w: 3,
          h: 4,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b66834000',
            },
          },
        },
      },
      {
        id: '039d8c0b67034000',
        type: 'cell',
        attributes: {
          x: 0,
          y: 5,
          w: 3,
          h: 3,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b67034000',
            },
          },
        },
      },
      {
        id: '039d8c0b67434000',
        type: 'cell',
        attributes: {
          x: 3,
          y: 5,
          w: 3,
          h: 3,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b67434000',
            },
          },
        },
      },
      {
        id: '039d8c0b67c34000',
        type: 'cell',
        attributes: {
          x: 6,
          y: 5,
          w: 3,
          h: 3,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b67c34000',
            },
          },
        },
      },
      {
        id: '039d8c0b68434000',
        type: 'cell',
        attributes: {
          x: 9,
          y: 5,
          w: 3,
          h: 3,
        },
        relationships: {
          view: {
            data: {
              type: 'view',
              id: '039d8c0b68434000',
            },
          },
        },
      },
      {
        type: 'view',
        id: '039d8c0b62c34000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            type: 'markdown',
            note:
              'This dashboard gives you an overview of System metrics with metrics from `system`, `mem`, `diskio`, `swap` and `net` measurements. See the [Telegraf Documentation](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/system) for help configuring these plugins.',
          },
          name: 'Name this Cell',
        },
      },
      {
        type: 'view',
        id: '039d8c0b63434000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            type: 'single-stat',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "system")\n  |> filter(fn: (r) => r._field == "uptime")\n  |> window(period: 1h)\n  |> last()\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> map(fn: (r) => r._value / 86400, mergeKey: true)\n  |> yield(name: "last")\n  \n  \n  ',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            prefix: '',
            suffix: ' days',
            colors: [
              {
                id: 'base',
                type: 'text',
                hex: '#00C9FF',
                name: 'laser',
                value: 0,
              },
            ],
            decimalPlaces: {
              isEnforced: false,
              digits: 2,
            },
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'System Uptime',
        },
      },
      {
        type: 'view',
        id: '039d8c0b63c34000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            type: 'single-stat',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "system")\n  |> filter(fn: (r) => r._field == "n_cpus")\n  |> window(period: v.windowPeriod)\n  |> last()\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> yield(name: "last")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            prefix: '',
            suffix: ' cpus',
            colors: [
              {
                id: 'base',
                type: 'text',
                hex: '#00C9FF',
                name: 'laser',
                value: 0,
              },
            ],
            decimalPlaces: {
              isEnforced: true,
              digits: 2,
            },
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'nCPUs',
        },
      },
      {
        type: 'view',
        id: '039d8c0b64034000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            type: 'single-stat',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "system")\n  |> filter(fn: (r) => r._field == "load1")\n  |> window(period: v.windowPeriod)\n  |> mean()\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> yield(name: "mean")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            prefix: '',
            suffix: '',
            colors: [
              {
                id: 'base',
                type: 'text',
                hex: '#00C9FF',
                name: 'laser',
                value: 0,
              },
            ],
            decimalPlaces: {
              isEnforced: true,
              digits: 2,
            },
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'System Load',
        },
      },
      {
        type: 'view',
        id: '039d8c0b64c34000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            type: 'single-stat',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "mem")\n  |> filter(fn: (r) => r._field == "total")\n  |> window(period: v.windowPeriod)\n  |> last()\n  |> map(fn: (r) => r._value / 1024 / 1024 / 1024, mergeKey: true)\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> yield(name: "last")\n  ',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            prefix: '',
            suffix: ' GB',
            colors: [
              {
                id: 'base',
                type: 'text',
                hex: '#00C9FF',
                name: 'laser',
                value: 0,
              },
            ],
            decimalPlaces: {
              isEnforced: true,
              digits: 2,
            },
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'Total Memory',
        },
      },
      {
        type: 'view',
        id: '039d8c0b65034000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "disk")\n  |> filter(fn: (r) => r._field == "used_percent")\n  |> window(period: v.windowPeriod)\n  |> mean()\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> yield(name: "mean")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            axes: {
              x: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '%',
                base: '10',
                scale: 'linear',
              },
              y2: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
            },
            type: 'xy',
            legend: {},
            geom: 'line',
            colors: [],
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'Disk Usage',
        },
      },
      {
        type: 'view',
        id: '039d8c0b65834000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user" or r._field == "usage_system" or r._field == "usage_idle")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n  |> window(period: v.windowPeriod)\n  |> mean()\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> yield(name: "mean")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            axes: {
              x: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '%',
                base: '10',
                scale: 'linear',
              },
              y2: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
            },
            type: 'xy',
            legend: {},
            geom: 'line',
            colors: [],
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'CPU Usage',
        },
      },
      {
        type: 'view',
        id: '039d8c0b66034000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "system")\n  |> filter(fn: (r) => r._field == "load1" or r._field == "load5" or r._field == "load15")\n  |> window(period: v.windowPeriod)\n  |> mean()\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> yield(name: "mean")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            axes: {
              x: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y: {
                bounds: ['', ''],
                label: 'Load',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y2: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
            },
            type: 'xy',
            legend: {},
            geom: 'line',
            colors: [],
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'System Load',
        },
      },
      {
        type: 'view',
        id: '039d8c0b66834000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "mem")\n  |> filter(fn: (r) => r._field == "used_percent")\n  |> window(period: v.windowPeriod)\n  |> mean()\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> yield(name: "mean")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            axes: {
              x: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '%',
                base: '10',
                scale: 'linear',
              },
              y2: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
            },
            type: 'line-plus-single-stat',
            legend: {},
            colors: [
              {
                id: 'base',
                type: 'text',
                hex: '#00C9FF',
                name: 'laser',
                value: 0,
              },
              {
                id: 'c2f922df-60a1-4471-91fc-c16427e7fcfb',
                type: 'scale',
                hex: '#8F8AF4',
                name: 'Do Androids Dream of Electric Sheep?',
                value: 0,
              },
              {
                id: '330f7fee-d44e-4a15-b2d6-2330178ec203',
                type: 'scale',
                hex: '#A51414',
                name: 'Do Androids Dream of Electric Sheep?',
                value: 0,
              },
              {
                id: 'e3c73eb3-665a-414b-afdd-1686c9b962d9',
                type: 'scale',
                hex: '#F4CF31',
                name: 'Do Androids Dream of Electric Sheep?',
                value: 0,
              },
            ],
            prefix: '',
            suffix: '%',
            decimalPlaces: {
              isEnforced: true,
              digits: 1,
            },
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'Memory Usage',
        },
      },
      {
        type: 'view',
        id: '039d8c0b67034000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "diskio")\n  |> filter(fn: (r) => r._field == "read_bytes" or r._field == "write_bytes")\n  |> derivative(unit: v.windowPeriod, nonNegative: false)\n  |> yield(name: "derivative")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            axes: {
              x: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y: {
                bounds: ['', ''],
                label: 'Bytes',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y2: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
            },
            type: 'xy',
            legend: {},
            geom: 'line',
            colors: [],
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'Disk IO',
        },
      },
      {
        type: 'view',
        id: '039d8c0b67434000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "net")\n  |> filter(fn: (r) => r._field == "bytes_recv" or r._field == "bytes_sent")\n  |> derivative(unit: v.windowPeriod, nonNegative: false)\n  |> yield(name: "derivative")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            axes: {
              x: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y: {
                bounds: ['', ''],
                label: 'Bytes',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y2: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
            },
            type: 'xy',
            legend: {},
            geom: 'line',
            colors: [],
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'Network',
        },
      },
      {
        type: 'view',
        id: '039d8c0b67c34000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "processes")\n  |> filter(fn: (r) => r._field == "running" or r._field == "blocked" or r._field == "idle" or r._field == "unknown")\n  |> window(period: v.windowPeriod)\n  |> max()\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> yield(name: "max")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            axes: {
              x: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y2: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
            },
            type: 'xy',
            legend: {},
            geom: 'line',
            colors: [],
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'Processes',
        },
      },
      {
        type: 'view',
        id: '039d8c0b68434000',
        attributes: {
          properties: {
            shape: 'chronograf-v2',
            queries: [
              {
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart)\n  |> filter(fn: (r) => r._measurement == "swap")\n  |> filter(fn: (r) => r._field == "total" or r._field == "used")\n  |> window(period: v.windowPeriod)\n  |> mean()\n  |> group(columns: ["_value", "_time", "_start", "_stop"], mode: "except")\n  |> yield(name: "mean")',
                editMode: 'advanced',
                name: '',
                builderConfig: {
                  buckets: [],
                  tags: [{key: '_measurement', values: []}],
                  functions: [],
                },
              },
            ],
            axes: {
              x: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
              y2: {
                bounds: ['', ''],
                label: '',
                prefix: '',
                suffix: '',
                base: '10',
                scale: 'linear',
              },
            },
            type: 'xy',
            legend: {},
            geom: 'line',
            colors: [],
            note: '',
            showNoteWhenEmpty: false,
          },
          name: 'Swap',
        },
      },
      {
        id: '0399e8fd61294000',
        type: 'variable',
        attributes: {
          name: 'bucket',
          arguments: {
            type: 'query',
            values: {
              query: 'buckets()\n  |> map(fn: (r) => r.name)\n',
              language: 'flux',
            },
          },
          selected: null,
        },
      },
    ],
  },
  labels: [],
})
export const gettingStartedWithFluxTemplate = () => ({
  meta: {
    name: 'Getting Started with Flux',
    version: '1',
  },
  content: {
    data: {
      attributes: {
        description: '',
        name: 'Getting Started with Flux',
      },
      relationships: {
        cell: {
          data: [
            {
              id: '03afa77a93d82000',
              type: 'cell',
            },
            {
              id: '03afa77a9b582000',
              type: 'cell',
            },
            {
              id: '03afa77aa3582000',
              type: 'cell',
            },
            {
              id: '03afa77aa6182000',
              type: 'cell',
            },
            {
              id: '03afa77aaad82000',
              type: 'cell',
            },
            {
              id: '03afa77aad182000',
              type: 'cell',
            },
            {
              id: '03afa77aaf982000',
              type: 'cell',
            },
            {
              id: '03afa77ab7982000',
              type: 'cell',
            },
            {
              id: '03afa77ac3582000',
              type: 'cell',
            },
            {
              id: '03afa77ac6582000',
              type: 'cell',
            },
            {
              id: '03afa77ac9d82000',
              type: 'cell',
            },
            {
              id: '03afa77ace182000',
              type: 'cell',
            },
            {
              id: '03afa77ad1582000',
              type: 'cell',
            },
            {
              id: '03afa9d535982000',
              type: 'cell',
            },
          ],
        },
        label: {
          data: [],
        },
        variable: {
          data: [
            {
              id: '039d86a307713000',
              type: 'variable',
            },
          ],
        },
      },
      type: 'dashboard',
    },
    included: [
      {
        attributes: {
          h: 6,
          w: 6,
          x: 0,
          y: 1,
        },
        id: '03afa77a93d82000',
        relationships: {
          view: {
            data: {
              id: '03afa77a93d82000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 6,
          w: 6,
          x: 6,
          y: 1,
        },
        id: '03afa77a9b582000',
        relationships: {
          view: {
            data: {
              id: '03afa77a9b582000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 5,
          w: 6,
          x: 0,
          y: 11,
        },
        id: '03afa77aa3582000',
        relationships: {
          view: {
            data: {
              id: '03afa77aa3582000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 5,
          w: 6,
          x: 6,
          y: 11,
        },
        id: '03afa77aa6182000',
        relationships: {
          view: {
            data: {
              id: '03afa77aa6182000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 4,
          w: 6,
          x: 0,
          y: 7,
        },
        id: '03afa77aaad82000',
        relationships: {
          view: {
            data: {
              id: '03afa77aaad82000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 4,
          w: 6,
          x: 6,
          y: 7,
        },
        id: '03afa77aad182000',
        relationships: {
          view: {
            data: {
              id: '03afa77aad182000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 5,
          w: 6,
          x: 0,
          y: 16,
        },
        id: '03afa77aaf982000',
        relationships: {
          view: {
            data: {
              id: '03afa77aaf982000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 5,
          w: 6,
          x: 6,
          y: 16,
        },
        id: '03afa77ab7982000',
        relationships: {
          view: {
            data: {
              id: '03afa77ab7982000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 7,
          w: 6,
          x: 0,
          y: 27,
        },
        id: '03afa77ac3582000',
        relationships: {
          view: {
            data: {
              id: '03afa77ac3582000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 7,
          w: 6,
          x: 6,
          y: 27,
        },
        id: '03afa77ac6582000',
        relationships: {
          view: {
            data: {
              id: '03afa77ac6582000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 6,
          w: 6,
          x: 0,
          y: 21,
        },
        id: '03afa77ac9d82000',
        relationships: {
          view: {
            data: {
              id: '03afa77ac9d82000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 6,
          w: 6,
          x: 6,
          y: 21,
        },
        id: '03afa77ace182000',
        relationships: {
          view: {
            data: {
              id: '03afa77ace182000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 1,
          w: 12,
          x: 0,
          y: 34,
        },
        id: '03afa77ad1582000',
        relationships: {
          view: {
            data: {
              id: '03afa77ad1582000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          h: 1,
          w: 12,
          x: 0,
          y: 0,
        },
        id: '03afa9d535982000',
        relationships: {
          view: {
            data: {
              id: '03afa9d535982000',
              type: 'view',
            },
          },
        },
        type: 'cell',
      },
      {
        attributes: {
          name: 'Name this Cell',
          properties: {
            note:
              "## Your First Flux Query\n\nThe Graph vizualization in the cell to the right contains all the data that Telegraf is sending to InfluxDB, using the most basic Flux query we can construct.\n\nEvery Flux query needs at least two things to be valid: first, we'll need a `from()` function to specify where we the data we are going to query is coming from:\n\n```flux\nfrom(bucket: v.bucket)\n```\nWait, what's `v.bucket`? That's a predefined variable that we provided so that you could name your bucket whatever you'd like. Learn more about them [here](https://v2.docs.influxdata.com/v2.0/visualize-data/variables/).\n\nThe second piece we need is to use Flux's \"pipe forward\" (`|>`) operator to forward the data into our next function, `range()`. This will put bounds on the time range of the data being queried.\n\nInfluxDB 2.0 provides built-in variables to make it easier to build dashboards. Here, we're using the `v.timeRange*` variables as parameters in our range function. The dashboard should be set to \"Past 5m\" by default, so this will limit our query to the last five minutes of data. The setting is in the upper-right hand corner; if it's been changed, you should change it back before continuing.\n```\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n```\n\nIf you roll over the graph, you can scroll through the pop-up legend to see all the various time series that Telegraf is collecting. There's a lot there! Too much, actually. This isn't generally a query you'd want to run in production. In fact, we're going to limit the number of results, just in case:\n\n```\n  |> limit(n: 5000)\n```\n\nFor more information, check out the documentation for the [from](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/inputs/from/), [range](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/transformations/filter/), and [limit](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/transformations/limit/) functions.",
            shape: 'chronograf-v2',
            type: 'markdown',
          },
        },
        id: '03afa77a93d82000',
        type: 'view',
      },
      {
        attributes: {
          name: 'My First Flux Query',
          properties: {
            axes: {
              x: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y: {
                base: '10',
                bounds: ['0', '100'],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y2: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
            },
            colors: [],
            geom: 'line',
            legend: {},
            note:
              "# Uh oh, something has gone wrong!\n\nIf you're seeing this note, it means the queries running in this cell aren't returning any data. That might mean that your Telegraf instance hasn't sent any data to InfluxDB during the time range set in the Dashboard, or it might mean there is no data at all. Please install Telegraf or check your Telegraf configuration before continuing.\n\nYou can find detailed information about [setting up Telegraf in the InfluxDB 2.0 Documentation](https://v2.docs.influxdata.com/v2.0/collect-data/use-telegraf/).\n\nYou should configure the following plugins:\n\n- cpu\n- disk\n- network\n\nIf you need additional help, the best place to ask questions is on the [community site](https://community.influxdata.com/).",
            queries: [
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: ['cpu'],
                    },
                    {
                      key: '_field',
                      values: [],
                    },
                    {
                      key: 'cpu',
                      values: [],
                    },
                    {
                      key: 'host',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> limit(n: 5000)',
              },
            ],
            shape: 'chronograf-v2',
            showNoteWhenEmpty: true,
            type: 'xy',
          },
        },
        id: '03afa77a9b582000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Name this Cell',
          properties: {
            note:
              '# Windowing Data\n\nWindowing is a common function that can be used to compute aggregates of the data.\n\n```flux\nfrom(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n```\n\nAnd then we add:\n\n```flux\n  |> window(every: 15s)\n```\n\nThe data is returned to us as an individual time series for each window. If you edit the cell to the right, you can toggle the ["Raw Data" view](https://v2.docs.influxdata.com/v2.0/visualize-data/explore-metrics/#visualize-your-query).\n\nYou\'ll see each of the individual tables. These are each graphed in a different color. If you notice, there are gaps between the windows. This is because Flux only connects the points within the same time series, but all the data is still represented.\n\nFor more information, check out the documentation for the [window](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/transformations/window/) function.',
            shape: 'chronograf-v2',
            type: 'markdown',
          },
        },
        id: '03afa77aa3582000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Windowing Data',
          properties: {
            axes: {
              x: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y: {
                base: '10',
                bounds: ['0', '100'],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y2: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
            },
            colors: [],
            geom: 'line',
            legend: {},
            note:
              "# Uh oh, something has gone wrong!\n\nIf you're seeing this note, it means the queries running in this cell aren't returning any data. That might mean that your Telegraf instance hasn't sent any data to InfluxDB during the time range set in the Dashboard, or it might mean there is no data at all. Please install Telegraf or check your Telegraf configuration before continuing.\n\nYou can find detailed information about [setting up Telegraf in the InfluxDB 2.0 Documentation](https://v2.docs.influxdata.com/v2.0/collect-data/use-telegraf/).\n\nYou should configure the following plugins:\n\n- cpu\n- disk\n- network\n\nIf you need additional help, the best place to ask questions is on the [community site](https://community.influxdata.com/).",
            queries: [
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: ['cpu'],
                    },
                    {
                      key: '_field',
                      values: ['usage_user'],
                    },
                    {
                      key: 'cpu',
                      values: ['cpu-total'],
                    },
                    {
                      key: 'host',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n  |> window(every: 30s)',
              },
            ],
            shape: 'chronograf-v2',
            showNoteWhenEmpty: true,
            type: 'xy',
          },
        },
        id: '03afa77aa6182000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Name this Cell',
          properties: {
            note:
              '## Filtering Data\n\nThat first graph has a lot of data on it, which can make it hard to read. We can use the `filter()` function to continue to narrow down the number of series we return.\n\nWe\'ll use the same query as before:\n\n```flux\nfrom(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n```\nBut this time we\'ll continue to narrow down our results using additional `filter()` functions:\n\n```flux\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n```\n\nThe filter function takes a function as a paremeter. This function takes one parameter itself, `r`, which are the results of a query. It then looks for every row where the function returns true. The result, graphed on the right, is a single time series which represents the overall CPU usage across all cores by the user.\n\nFor more information, check out the documentation for the [filter](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/transformations/filter/) function.',
            shape: 'chronograf-v2',
            type: 'markdown',
          },
        },
        id: '03afa77aaad82000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Filtering Data',
          properties: {
            axes: {
              x: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y: {
                base: '10',
                bounds: ['0', '100'],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y2: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
            },
            colors: [],
            geom: 'line',
            legend: {},
            note:
              "# Uh oh, something has gone wrong!\n\nIf you're seeing this note, it means the queries running in this cell aren't returning any data. That might mean that your Telegraf instance hasn't sent any data to InfluxDB during the time range set in the Dashboard, or it might mean there is no data at all. Please install Telegraf or check your Telegraf configuration before continuing.\n\nYou can find detailed information about [setting up Telegraf in the InfluxDB 2.0 Documentation](https://v2.docs.influxdata.com/v2.0/collect-data/use-telegraf/).\n\nYou should configure the following plugins:\n\n- cpu\n- disk\n- network\n\nIf you need additional help, the best place to ask questions is on the [community site](https://community.influxdata.com/).",
            queries: [
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: ['cpu'],
                    },
                    {
                      key: '_field',
                      values: ['usage_user'],
                    },
                    {
                      key: 'cpu',
                      values: ['cpu-total'],
                    },
                    {
                      key: 'host',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")',
              },
            ],
            shape: 'chronograf-v2',
            showNoteWhenEmpty: true,
            type: 'xy',
          },
        },
        id: '03afa77aad182000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Name this Cell',
          properties: {
            note:
              '# Aggregation\n\nOnce we\'ve windowed the data, using those windows to calculate an aggregate is a common next step. We\'ll use the same `from()`, `range()`, and `filter()` functions as before:\n\n```flux\nfrom(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n```\n\nbut instead of using the `window()` function we\'ll use `aggregateWindow()`, a function written in Flux that will first window the data and then apply an aggregate:\n\n```flux\n  |> aggregateWindow(every: 15s, fn: mean)\n```\n\nChronograf lets us add additional queries in tabs in the cell editor, and we can use that functionality to graph the original data alongside the aggregated data. It\'s the same query, minus the `aggregateWindow` line.\n\nFor more information, check out the documentation for the [aggregateWindow](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/transformations/aggregates/aggregatewindow/) function.',
            shape: 'chronograf-v2',
            type: 'markdown',
          },
        },
        id: '03afa77aaf982000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Aggregated Data',
          properties: {
            axes: {
              x: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y: {
                base: '10',
                bounds: ['0', '100'],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y2: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
            },
            colors: [],
            geom: 'line',
            legend: {},
            note:
              "# Uh oh, something has gone wrong!\n\nIf you're seeing this note, it means the queries running in this cell aren't returning any data. That might mean that your Telegraf instance hasn't sent any data to InfluxDB during the time range set in the Dashboard, or it might mean there is no data at all. Please install Telegraf or check your Telegraf configuration before continuing.\n\nYou can find detailed information about [setting up Telegraf in the InfluxDB 2.0 Documentation](https://v2.docs.influxdata.com/v2.0/collect-data/use-telegraf/).\n\nYou should configure the following plugins:\n\n- cpu\n- disk\n- network\n\nIf you need additional help, the best place to ask questions is on the [community site](https://community.influxdata.com/).",
            queries: [
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: ['cpu'],
                    },
                    {
                      key: '_field',
                      values: ['usage_user'],
                    },
                    {
                      key: 'cpu',
                      values: ['cpu-total'],
                    },
                    {
                      key: 'host',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n  |> aggregateWindow(every: 30s, fn: mean)',
              },
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'from(bucket: "telegraf")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")',
              },
            ],
            shape: 'chronograf-v2',
            showNoteWhenEmpty: true,
            type: 'xy',
          },
        },
        id: '03afa77ab7982000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Name this Cell',
          properties: {
            note:
              '# Joins & Maps\n\nJoins and maps are powerful tools that let you combine and transform data. We can use them for a variety of tasks, including performing math across measurements. Let\'s add the values for CPU usage for the tags `usage_user` and `usage_system`.\n\nFirst, we need two variables to store those series. Those will be `usage_user_series` and `usage_system_series`, and are defined the same way as we did in the previous example.\n\nWith that data stored, we can continue constructing the query with a join:\n\n```\njoin(tables: {key1: usage_user_series, key2: usage_system_series}, \n     on: ["_time", "_measurement", "_start", "_stop", "cpu", "host"], \n     method: "inner")\n```\nThis will comine the two tables using an inner join on the columns we specify in the `on` parameter. It will give us a new table with the `_field` columns from the first table renamed to `_field_key1` and `_field_key2`. With the data all in one table, we can use the `map` function to add those two columns together: \n\n```\n  |> map(fn: (r) => ({\n    _time: r._time,\n    _value: r._value_key1 + r._value_key2,\n    _field: r._field_key1 + "+" + r._field_key2\n  }))\n```\nFinally, we want to make sure the group key is properly set, and drop the two columns we added, which we no longer need:\n```\n  |> group(columns: ["_start", "_stop", "_measurement", "_field", "cpu", "host"])\n  |> drop(columns: ["_field_key1", "_field_key2"])\n```\n\nFor more information, check out the documentation for the [join](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/transformations/join/), [map](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/transformations/map/), [group](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/transformations/group/), and [drop](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/transformations/drop/) functions.',
            shape: 'chronograf-v2',
            type: 'markdown',
          },
        },
        id: '03afa77ac3582000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Joins & Maps',
          properties: {
            axes: {
              x: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y: {
                base: '10',
                bounds: ['0', '100'],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
            },
            colors: [],
            geom: 'line',
            legend: {},
            note:
              "# Uh oh, something has gone wrong!\n\nIf you're seeing this note, it means the queries running in this cell aren't returning any data. That might mean that your Telegraf instance hasn't sent any data to InfluxDB during the time range set in the Dashboard, or it might mean there is no data at all. Please install Telegraf or check your Telegraf configuration before continuing.\n\nYou can find detailed information about [setting up Telegraf in the InfluxDB 2.0 Documentation](https://v2.docs.influxdata.com/v2.0/collect-data/use-telegraf/).\n\nYou should configure the following plugins:\n\n- cpu\n- disk\n- network\n\nIf you need additional help, the best place to ask questions is on the [community site](https://community.influxdata.com/).",
            queries: [
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: ['cpu'],
                    },
                    {
                      key: '_field',
                      values: ['usage_user'],
                    },
                    {
                      key: 'cpu',
                      values: ['cpu-total'],
                    },
                    {
                      key: 'host',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'usage_user_series = from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n  \nusage_system_series = from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_system")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n  \njoin(tables: {key1: usage_user_series, key2: usage_system_series}, \n     on: ["_time", "_measurement", "_start", "_stop", "cpu", "host"], \n     method: "inner")\n  |> map(fn: (r) => ({\n    _time: r._time,\n    _value: r._value_key1 + r._value_key2,\n    _field: r._field_key1 + "+" + r._field_key2\n  }))\n  |> group(columns: ["_start", "_stop", "_measurement", "_field", "cpu", "host"])\n  |> drop(columns: ["_field_key1", "_field_key2"])',
              },
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_system")\n  |> filter(fn: (r) => r.cpu == "cpu-total")',
              },
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")',
              },
            ],
            shape: 'chronograf-v2',
            showNoteWhenEmpty: true,
            type: 'xy',
          },
        },
        id: '03afa77ac6582000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Name this Cell',
          properties: {
            note:
              '# Multiple aggregates using Flux variables\n\nOne thing to be aware of with aggregations is the way it changes the shape of our data. We\'ll use another feature of Flux, variables, to calculate several aggregates based on stored data. First, we\'ll create a variable to store the same data we\'ve been working with so far:\n\n```flux\ncpu_usage_user = from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n```\n\nNow that the result has been stored in a variable, we can invoke it and pipe-forward the data first to an aggregateWindow function, and then to the yield function, which will let us specify what the resulting time series will be named:\n\n```flux\ncpu_usage_user \n  |> aggregateWindow(every: 15s, fn: mean)\n  |> yield(name: "mean_result")\n```\n\nAnd we can have a second function that applies a different aggregate:\n\n```  \ncpu_usage_user \n  |> aggregateWindow(every: 15s, fn: count)\n  |> yield(name: "count_result")\n```\n\nFor more information, check out the documentation for the [yield](https://v2.docs.influxdata.com/v2.0/reference/flux/functions/built-in/outputs/yield/) function.',
            shape: 'chronograf-v2',
            type: 'markdown',
          },
        },
        id: '03afa77ac9d82000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Multiple Aggregates Using Flux Variables',
          properties: {
            axes: {
              x: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y: {
                base: '10',
                bounds: ['0', '100'],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
              y2: {
                base: '10',
                bounds: ['', ''],
                label: '',
                prefix: '',
                scale: 'linear',
                suffix: '',
              },
            },
            colors: [],
            geom: 'line',
            legend: {},
            note:
              "# Uh oh, something has gone wrong!\n\nIf you're seeing this note, it means the queries running in this cell aren't returning any data. That might mean that your Telegraf instance hasn't sent any data to InfluxDB during the time range set in the Dashboard, or it might mean there is no data at all. Please install Telegraf or check your Telegraf configuration before continuing.\n\nYou can find detailed information about [setting up Telegraf in the InfluxDB 2.0 Documentation](https://v2.docs.influxdata.com/v2.0/collect-data/use-telegraf/).\n\nYou should configure the following plugins:\n\n- cpu\n- disk\n- network\n\nIf you need additional help, the best place to ask questions is on the [community site](https://community.influxdata.com/).",
            queries: [
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: ['cpu'],
                    },
                    {
                      key: '_field',
                      values: ['usage_user'],
                    },
                    {
                      key: 'cpu',
                      values: ['cpu-total'],
                    },
                    {
                      key: 'host',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'cpu_usage_user = from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")\n  \ncpu_usage_user\n  |> aggregateWindow(every: 30s, fn: mean)\n  |> yield(name: "mean_result")\n  \ncpu_usage_user\n  |> aggregateWindow(every: 30s, fn: count)\n  |> yield(name: "count_result")',
              },
              {
                builderConfig: {
                  buckets: ['telegraf'],
                  functions: [],
                  tags: [
                    {
                      key: '_measurement',
                      values: [],
                    },
                  ],
                },
                editMode: 'advanced',
                name: '',
                text:
                  'from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r._measurement == "cpu")\n  |> filter(fn: (r) => r._field == "usage_user")\n  |> filter(fn: (r) => r.cpu == "cpu-total")',
              },
            ],
            shape: 'chronograf-v2',
            showNoteWhenEmpty: true,
            type: 'xy',
          },
        },
        id: '03afa77ace182000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Name this Cell',
          properties: {
            note:
              '## Thank you for joining us!\n\nIf you have any questions on your journey, please check out the [community site](https://community.influxdata.com).',
            shape: 'chronograf-v2',
            type: 'markdown',
          },
        },
        id: '03afa77ad1582000',
        type: 'view',
      },
      {
        attributes: {
          name: 'Name this Cell',
          properties: {
            note:
              "#\nThis dashboard is designed to get you started with the [Flux language](https://v2.docs.influxdata.com/v2.0/reference/flux/). In order to use this, you will need to have data in your InfluxDB 2.0 instance. Just follow the instructions to [set up the Telegraf data agent](https://v2.docs.influxdata.com/v2.0/collect-data/use-telegraf/) from our documentation and you should be all set. If you have data in your system and still don't see any graphs, click the `Variables` button in the top right of the dashboard and select the bucket with your data.",
            shape: 'chronograf-v2',
            type: 'markdown',
          },
        },
        id: '03afa9d535982000',
        type: 'view',
      },
      {
        attributes: {
          arguments: {
            type: 'query',
            values: {
              language: 'flux',
              query: 'buckets()\n  |> distinct(column: "name")',
            },
          },
          name: 'bucket',
          selected: null,
        },
        id: '039d86a307713000',
        relationships: {
          label: {
            data: [],
          },
        },
        type: 'variable',
      },
    ],
  },
  labels: [],
})
