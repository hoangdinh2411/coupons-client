import { BaseData, ImageType, MetaData } from './share.type'

export interface TopicData extends BaseData {
  slug: string
  name: string
  image: ImageType
  meta_data?: MetaData
  description: string
}
