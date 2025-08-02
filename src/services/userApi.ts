'use server'
import { UserData } from '@/types/auth.type'
import customFetchWithToken from './customFetchWithToken'
import { CouponData } from '@/types/coupon.type'
import { revalidateTag } from 'next/cache'

export const getUserProfile = async () => {
  return await customFetchWithToken<UserData>(`/users/profile`, {
    method: 'GET',
    next: {
      revalidate: 3600,
    },
  })
}

export async function getUserSavedCoupons() {
  return await customFetchWithToken<CouponData[]>(`/users/my-coupons`, {
    method: 'GET',
    next: {
      tags: ['my-coupons'],
    },
  })
}
export async function saveCoupon(couponId: number) {
  const res = await customFetchWithToken<CouponData[]>(`/users/my-coupons`, {
    method: 'POST',
    body: JSON.stringify({
      coupon_id: couponId,
    }),
  })
  if (res.success) {
    revalidateTag('my-coupons')
  }
  return res
}
