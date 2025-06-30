import { CategoryData } from '@/types/category.type'
import customFetch from './customFetch'
import { MenuData } from '@/types/client.type'

export type MenuResponse = MenuData
export const getMenu = async () => {
  return await customFetch<MenuResponse>(`/client/menu`, {
    cache: 'no-cache',
  })
}
export const getAllCategoriesWithAllStores = async () => {
  return await customFetch<CategoryData[]>(`/client/categories`, {
    cache: 'no-cache',
  })
}
