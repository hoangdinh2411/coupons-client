import { CategoryData } from './category.type'
import { StoreData } from './store.type'

export interface MenuData {
  popular: StoreData[]
  categories: CategoryData[]
}
