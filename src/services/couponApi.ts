import { CouponData, CouponPayload } from '@/types/coupon.type'
import customFetch from './customFetch'
import customFetchWithToken from './customFetchWithToken'

export async function getCoupon(id: number) {
  return await customFetch<CouponData>(`/client/coupons?id=${id}`, {
    method: 'GET',
    next: {
      revalidate: 3600,
      tags: ['coupons-' + id],
    },
  })
}

export async function createCoupon(payload: CouponPayload) {
  return await customFetchWithToken<CouponData>(`/coupons`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
