import { BlogData } from './blog.type'
import { CategoryData } from './category.type'
import { StoreData } from './store.type'
import { TopicData } from './topic.type'

export interface MenuData {
  top_categories: CategoryData[]
  popular: StoreData[]
  top_topic: TopicData[]
}

export interface SearchData {
  blogs: BlogData[]
  categories: CategoryData[]
  stores: StoreData[]
}
