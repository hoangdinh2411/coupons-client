import { CategoryData } from './category.type'
import { MetaData, TimestampedEntity } from './share.type'

export interface StorePayload {
  name: string
  description: string
  image_bytes: string
  max_discount_pct: number
  keywords: string[]
  url: string
  category_id: number
}
export interface StoreData
  extends Omit<StorePayload, 'category'>,
    TimestampedEntity {
  id: number
  slug: string
  category_id: number
  category?: CategoryData
  coupons: []
  meta_data?: MetaData
  rating: number
}
