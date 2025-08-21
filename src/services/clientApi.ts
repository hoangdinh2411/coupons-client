import { CouponData } from '@/types/coupon.type'
import customFetch from './customFetch'
import { MenuData, SearchData } from '@/types/client.type'
import { DynamicPageData } from '@/types/dynamic-page.type'

export const getMenu = async () => {
  return await customFetch<MenuData>(`/client/menu`, {
    next: {
      revalidate: 3600,
      tags: ['menu-data'],
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
      tags: ['menu-data'],
    },
  })
}
export const getOtherPageBySlug = async (type: string) => {
  return await customFetch<DynamicPageData>(`/client/pages/${type}`, {
    next: {
      revalidate: 3600,
      tags: ['page-data'],
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
