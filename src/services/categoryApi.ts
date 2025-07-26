import { CategoryData } from '@/types/category.type'
import customFetch from './customFetch'
import { CouponData } from '@/types/coupon.type'

export const getAllCategoriesWithAllStores = async () => {
  return await customFetch<CategoryData[]>(`/client/categories`, {
    next: {
      revalidate: 3600,
    },
  })
}

export const getCategoryBySlug = async (slug: string) => {
  return await customFetch<CategoryData>(`/client/categories/${slug}`, {
    next: {
      tags: [slug],
    },
  })
}

export const getCouponsByCategory = async (id: string, page: number = 1) => {
  return await customFetch<CouponData>(
    `/client/categories/${id}/coupons?page=${page}`,
    {
      next: {
        tags: [id],
      },
    },
  )
}
