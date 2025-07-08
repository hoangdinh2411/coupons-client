import { BaseData, ImageType, MetaData } from './share.type'
import { StoreData } from './store.type'

export interface CategoryData extends BaseData {
  slug: string
  stores?: StoreData[]
  name: string
  image: ImageType
  meta_data?: MetaData
}
