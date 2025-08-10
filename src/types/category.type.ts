import { CouponData } from './coupon.type'
import { BaseData, ImageType, MetaData } from './share.type'
import { FAQData, StoreData } from './store.type'

export interface CategoryData extends BaseData {
  slug: string
  stores?: StoreData[]
  name: string
  image: ImageType
  meta_data?: MetaData
  faqs: FAQData[]
  description: string
}

export interface CountCoupons {
  total_coupon_codes: string
  total_coupons: string
  total_in_store_coupons: string
  total_sale_coupons: string
}

export interface CategoryListData extends BaseData {
  category: CategoryData
  count_coupons: CountCoupons
  similar_stores: StoreData[]
  top_deals: CouponData[]
}
