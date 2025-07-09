import customFetch from './customFetch'
import { StoreData } from '@/types/store.type'

export const getStoreBySlug = async (slug: string) => {
  return await customFetch<StoreData>(`/client/stores/${slug}`, {
    next: {
      tags: [slug],
      revalidate: 3600,
    },
  })
}
