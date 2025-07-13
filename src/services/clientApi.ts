import customFetch from './customFetch'
import { MenuData, SearchData } from '@/types/client.type'

export const getMenu = async () => {
  return await customFetch<MenuData>(`/client/menu`, {
    next: {
      revalidate: 3600,
    },
  })
}
export const search = async (search_text: string) => {
  return await customFetch<SearchData>(
    `/client/search?search_text=${search_text}`,
    {
      cache: 'no-cache',
    },
  )
}
