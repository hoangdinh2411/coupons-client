import { CategoryData } from '@/types/category.type'
import customFetch from './customFetch'

export const getAllCategoriesWithAllStores = async () => {
  return await customFetch<CategoryData[]>(`/client/categories`, {
    next: {
      revalidate: 3600,
    },
  })
}
