import { CategoryData, CategoryListData } from '@/types/category.type'
import customFetch from './customFetch'
import { CouponData } from '@/types/coupon.type'

export const getAllCategoriesWithAllStores = async () => {
  return await customFetch<CategoryData[]>(`/client/categories`, {
    next: {
      revalidate: 3600,
      tags: ['categories-data'],
    },
  })
}

export const getCategoryBySlug = async (slug: string) => {
  return await customFetch<CategoryListData>(`/client/categories/${slug}`, {
    cache: 'force-cache',
  })
}

export const getCouponsByCategory = async (id: number, page: number = 1) => {
  return await customFetch<CouponData[]>(
    `/client/categories/${id}/coupons?page=${page}`,
    {
      cache: 'force-cache',
    },
  )
}
