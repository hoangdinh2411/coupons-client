import { CategoryData } from '@/types/category.type'
import customFetch from './customFetch'
import { MenuData } from '@/types/client.type'
import { StoreData } from '@/types/store.type'

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

export const searchStore = async (
  first_letter?: string,
  search_text?: string,
) => {
  return await customFetch<StoreData[]>(
    `/client/stores?first_letter=${first_letter}&search_text=${search_text}`,
  )
}
