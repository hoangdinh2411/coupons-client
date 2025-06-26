import { UserData } from './auth.type'
import { CategoryData } from './category.type'
import { CouponType } from './enum/enum'
import { MetaData, TimestampedEntity } from './share.type'
import { StoreData } from './store.type'

export interface CouponPayload {
  title: string
  code: string
  offer_detail: string
  store_id: number
  category_id: number
  is_exclusive: boolean
  expire_date: string
  type: CouponType
}

export interface CouponData extends CouponPayload, TimestampedEntity {
  id: number
  store: StoreData
  category: CategoryData
  meta_data?: MetaData
  added_by: number
  user?: UserData
}
