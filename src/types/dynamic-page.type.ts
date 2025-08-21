/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseData, ImageType, MetaData } from './share.type'
import { FAQData } from './store.type'

export interface DynamicPageData extends BaseData {
  meta_data: MetaData
  id: number
  type: string
  slug: string
  content: string
  images: string[]
  thumbnail: ImageType
  faqs: FAQData[]
}
