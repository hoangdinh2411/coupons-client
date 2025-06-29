import { CouponData, CouponPayload } from '@/types/coupon.type'
import customFetchWithToken from './customFetchWithToken'

export async function createCoupon(payload: CouponPayload) {
  return await customFetchWithToken<CouponData>(`/coupons`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
