import CouponCardAccordion from '@/components/card/CouponCardAccordion'
import { CouponData } from '@/types/coupon.type'
import React from 'react'
interface CouponListPropsType {
  coupons: CouponData[]
}
function CouponList({ coupons }: CouponListPropsType) {
  return (
    <div>
      {coupons.map((coupon: CouponData, index: number) => (
        <CouponCardAccordion key={index} {...coupon} />
      ))}
    </div>
  )
}

export default CouponList
