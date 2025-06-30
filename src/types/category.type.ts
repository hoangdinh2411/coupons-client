import { ImageType, MetaData } from './share.type'
import { StoreData } from './store.type'

export interface CategoryPayload {
  name: string
  image: ImageType
  meta_data?: MetaData
}

export interface CategoryData extends CategoryPayload {
  id: number
  slug: string
  stores?: StoreData[]
}
