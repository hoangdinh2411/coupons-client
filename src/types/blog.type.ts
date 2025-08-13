import { UserData } from './auth.type'
import { ImageType, MetaData, BaseData } from './share.type'
import { FAQData } from './store.type'
import { TopicData } from './topic.type'

export interface BlogData extends BaseData {
  title: string
  content: string
  keywords: string[]
  topic_id: number
  slug: string
  topic: TopicData
  meta_data?: MetaData
  rating: number
  image: ImageType
  is_published: boolean
  is_indexed: boolean
  created_at: string
  user: UserData
  faqs: FAQData[]
}
