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
  coupons: []
  meta_data?: MetaData
  rating: number
}

export interface StoreDetailData extends BaseData {
  meta_data: {
    title: string
    description: string
    keywords: string[]
    image: string
    slug: string
  }

  id: number
  name: string
  image: {
    url: string
    file_name: string
    public_id: string
  }
  description: string
  rating: number
  max_discount_pct: number
  keywords: string[]
  url: string
  slug: string
  coupons: CouponData[]
  categories: CategoryData[]
}
