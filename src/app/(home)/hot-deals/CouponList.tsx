/* eslint-disable react/no-children-prop */
import CouponCard from '@/components/card/CouponCard'
import { CouponData } from '@/types/coupon.type'

interface CouponListProps {
  coupons: CouponData[]
}
function CouponList({ coupons }: CouponListProps) {
  return (
    <div
      className={`mb-16 grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-2 lg:grid-cols-5`}
    >
      {coupons.map((coupon: CouponData) => (
        <CouponCard key={coupon.id} coupon={coupon} />
      ))}
    </div>
  )
}

export default CouponList
