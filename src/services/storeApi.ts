import customFetch from './customFetch'
import { StoreData } from '@/types/store.type'

export const getStoreBySlug = async (slug: string) => {
  return await customFetch<{
    store: StoreData
    similar_stores: StoreData[]
  }>(`/client/stores/${slug}`, {
    cache: 'force-cache',
  })
}

export const searchStore = async (
  first_letter?: string,
  search_text?: string,
) => {
  if (!search_text) {
    search_text = ''
  }
  if (!first_letter) {
    first_letter = ''
  }
  return await customFetch<StoreData[]>(
    `/client/stores?first_letter=${first_letter}&search_text=${search_text}`,
  )
}
