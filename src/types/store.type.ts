import { CategoryData } from './category.type'
import { ImageType, MetaData, BaseData } from './share.type'

export interface StoreData extends BaseData {
  name: string
  description: string
  max_discount_pct: number
  keywords: string[]
  url: string
  slug: string
  image?: ImageType
  categories?: CategoryData[]
  coupons: []
  meta_data?: MetaData
  rating: number
}
