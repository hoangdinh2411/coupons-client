import { ImageType, MetaData } from './share.type'

export interface TopicPayload {
  name: string
  image: ImageType
  meta_data?: MetaData
}

export interface TopicData extends TopicPayload {
  id: number
  slug: string
}
