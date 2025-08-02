import { UserData } from '@/types/auth.type'
import customFetchWithToken from './customFetchWithToken'
import { CouponData } from '@/types/coupon.type'

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
