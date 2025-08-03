import { UserData } from './auth.type'
import { CategoryData } from './category.type'
import { CouponType } from './enum'
import { BaseData, MetaData } from './share.type'
import { StoreData } from './store.type'

export interface CouponPayload {
  title: string
  code: string
  offer_detail: string
  store_id: number
  categories: number[]
  is_exclusive: boolean
  expire_date: string
  start_date: string
  type: CouponType
  discount: number
}

export interface CouponData extends BaseData {
  title: string
  code: string
  offer_detail: string
  offer_link?: string
  store_id: number
  is_exclusive: boolean
  expire_date: string
  start_date: string
  type: CouponType
  rating: number
  store?: StoreData
  discount: number
  categories?: CategoryData[]
  meta_data?: MetaData
  added_by: number
  user?: UserData
  total_interested_users: number
}
