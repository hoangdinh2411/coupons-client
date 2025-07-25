import { CategoryData } from './category.type'
import { CouponData } from './coupon.type'
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
  coupons: CouponData[]
  meta_data?: MetaData
  rating: number
  total_coupons?: number
  total_coupon_codes?: number
  total_sale_coupons?: number
  total_in_store_coupons?: number
  faqs: FAQData[]
  expired_coupons?: CouponData[]
  unexpired_coupons?: CouponData[]
}

export interface FAQData extends BaseData {
  question: string
  answer: string
  order: number
  store: StoreData
}
