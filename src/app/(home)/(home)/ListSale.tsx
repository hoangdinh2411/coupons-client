import CouponCard from '@/components/card/CouponCard'
import { CouponData } from '@/types/coupon.type'

interface ListSaleProps {
  top_deals: CouponData[]
}

export default function ListSale({ top_deals }: ListSaleProps) {
  return (
    <ul className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
      {top_deals.map((coupon) => (
        <CouponCard key={coupon.id} coupon={coupon} />
      ))}
    </ul>
  )
}
