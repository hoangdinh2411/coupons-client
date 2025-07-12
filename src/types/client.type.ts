import { BlogData } from './blog.type'
import { CategoryData } from './category.type'
import { StoreData } from './store.type'

export interface MenuData {
  top_categories: CategoryData[]
  popular: StoreData[]
  categories: CategoryData[]
}

export interface SearchData {
  blogs: BlogData[]
  categories: CategoryData[]
  stores: StoreData[]
}
