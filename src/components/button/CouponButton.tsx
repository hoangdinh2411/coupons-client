'use client'
import { CouponData } from '@/types/coupon.type'
import { CouponType } from '@/types/enum'

interface CouponButtonProps {
  coupon: CouponData
}

export default function CouponButton({ coupon }: CouponButtonProps) {
  const getButtonContent = () => {
    switch (coupon.type as CouponType) {
      case CouponType.CODE:
        return 'See code'
      case CouponType.ONLINE_AND_IN_STORE:
        return 'Shop now'
      default:
        return 'Get deal'
    }
  }
  const getHideValue = () => {
    switch (coupon.type as CouponType) {
      case CouponType.CODE:
        return coupon.code ?? ''
      case CouponType.ONLINE_AND_IN_STORE:
        return 'Shop now'
      default:
        return 'Get deal'
    }
  }

  return (
    <div className="coupon-button show-peel">
      <div className="coupon-button-peel">{getHideValue()}</div>
      {getButtonContent()}
    </div>
  )
}
