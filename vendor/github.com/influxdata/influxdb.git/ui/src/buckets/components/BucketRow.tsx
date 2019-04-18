// Libraries
import React, {PureComponent} from 'react'
import {withRouter, WithRouterProps} from 'react-router'
import _ from 'lodash'

// Components
import {IndexList, ConfirmationButton, Context} from 'src/clockface'
import CloudFeatureFlag from 'src/shared/components/CloudFeatureFlag'
import EditableName from 'src/shared/components/EditableName'

// Constants
import {DEFAULT_BUCKET_NAME} from 'src/dashboards/constants'

// Types
import {
  ButtonShape,
  ComponentSize,
  ComponentColor,
  IconFont,
} from '@influxdata/clockface'
import {Alignment} from 'src/clockface'
import {Bucket} from 'src/types'
import {DataLoaderType} from 'src/types/dataLoaders'

export interface PrettyBucket extends Bucket {
  ruleString: string
}

interface Props {
  bucket: PrettyBucket
  onEditBucket: (b: PrettyBucket) => void
  onDeleteBucket: (b: PrettyBucket) => void
  onAddData: (b: PrettyBucket, d: DataLoaderType, l: string) => void
  onUpdateBucket: (b: PrettyBucket) => void
  onFilterChange: (searchTerm: string) => void
}

class BucketRow extends PureComponent<Props & WithRouterProps> {
  public render() {
    const {bucket, onDeleteBucket} = this.props
    return (
      <>
        <IndexList.Row>
          <IndexList.Cell>
            <EditableName
              onUpdate={this.handleUpdateBucketName}
              name={bucket.name}
              onEditName={this.handleEditBucket}
              noNameString={DEFAULT_BUCKET_NAME}
            />
          </IndexList.Cell>
          <IndexList.Cell>{bucket.ruleString}</IndexList.Cell>
          <IndexList.Cell revealOnHover={true} alignment={Alignment.Right}>
            <ConfirmationButton
              size={ComponentSize.ExtraSmall}
              text="Delete"
              confirmText="Confirm"
              onConfirm={onDeleteBucket}
              returnValue={bucket}
            />
          </IndexList.Cell>
          <IndexList.Cell alignment={Alignment.Right}>
            <Context align={Alignment.Center}>
              <Context.Menu
                icon={IconFont.Plus}
                text="Add Data"
                shape={ButtonShape.Default}
                color={ComponentColor.Primary}
              >
                <Context.Item
                  label="Configure Telegraf Agent"
                  description="Configure a Telegraf agent to push data into your bucket."
                  action={this.handleAddCollector}
                />
                <Context.Item
                  label="Line Protocol"
                  description="Quickly load an existing line protocol file."
                  action={this.handleAddLineProtocol}
                />
                <CloudFeatureFlag>
                  <Context.Item
                    label="Scrape Metrics"
                    description="Add a scrape target to pull data into your bucket."
                    action={this.handleAddScraper}
                  />
                </CloudFeatureFlag>
              </Context.Menu>
            </Context>
          </IndexList.Cell>
        </IndexList.Row>
      </>
    )
  }

  private handleUpdateBucketName = async (value: string) => {
    await this.props.onUpdateBucket({...this.props.bucket, name: value})
  }

  private handleEditBucket = (): void => {
    this.props.onEditBucket(this.props.bucket)
  }

  private handleAddCollector = (): void => {
    const {
      params: {orgID},
      bucket: {id},
    } = this.props

    const link = `/orgs/${orgID}/buckets/${id}/telegrafs/new`
    this.props.onAddData(this.props.bucket, DataLoaderType.Streaming, link)
  }

  private handleAddLineProtocol = (): void => {
    const {
      params: {orgID},
      bucket: {id},
    } = this.props

    const link = `/orgs/${orgID}/buckets/${id}/line-protocols/new`
    this.props.onAddData(this.props.bucket, DataLoaderType.LineProtocol, link)
  }

  private handleAddScraper = (): void => {
    const {
      params: {orgID},
      bucket: {id},
    } = this.props

    const link = `/orgs/${orgID}/buckets/${id}/scrapers/new`
    this.props.onAddData(this.props.bucket, DataLoaderType.Scraping, link)
  }
}

export default withRouter<Props>(BucketRow)
