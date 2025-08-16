'use server'
import { UserData, UserRequestPayload } from '@/types/auth.type'
import customFetchWithToken from './customFetchWithToken'
import { CouponData } from '@/types/coupon.type'
import { revalidateTag } from 'next/cache'

export const getUserProfile = async () => {
  return await customFetchWithToken<UserData>(`/users/profile`, {
    method: 'GET',
    cache: 'no-cache',
  })
}

export async function getUserSavedCoupons() {
  return await customFetchWithToken<CouponData[]>(`/users/my-coupons`, {
    method: 'GET',
    next: {
      revalidate: 3600,
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

export async function updateUser(payload: Partial<UserRequestPayload>) {
  const res = await customFetchWithToken<UserData>(`/users/profile`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return res
}
