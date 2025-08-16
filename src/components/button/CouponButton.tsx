'use client'
import { CouponData } from '@/types/coupon.type'
import { CouponType } from '@/types/enum'

interface CouponButtonProps {
  coupon: CouponData
}

export default function CouponButton({ coupon }: CouponButtonProps) {
  return (
    <div className="coupon-button show-peel">
      {coupon?.code ? (
        <div className="coupon-button-peel">{coupon?.code}</div>
      ) : (
        <div className="coupon-button-peel">Get Deal</div>
      )}
      {coupon.type === CouponType.CODE ? 'See Code' : 'Get Deal'}
    </div>
  )
}
