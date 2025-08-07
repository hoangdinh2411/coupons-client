import { CouponData } from '@/types/coupon.type'
import customFetch from './customFetch'
import { MenuData, SearchData } from '@/types/client.type'

export const getMenu = async () => {
  return await customFetch<MenuData>(`/client/menu`, {
    next: {
      revalidate: 3600,
    },
  })
}
export const getDataForHomePage = async () => {
  return await customFetch<{
    top_deal_today: CouponData[]
    top_deals: CouponData[]
  }>(`/client/home`, {
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
