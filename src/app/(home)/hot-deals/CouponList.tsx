/* eslint-disable react/no-children-prop */
import CouponCard from '@/components/card/CouponCard'
interface Coupon {
  id: string | number
  title: string
  description: string
  imgUrl: string
  badgeIcon: string | null
  badgeTitle: string
}

interface CouponListProps {
  coupons: Coupon[]
}
function CouponList({ coupons }: CouponListProps) {
  return (
    <div>
      <div
        className={`mb-16 grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-2 lg:grid-cols-5`}
      >
        {coupons.map((coupon: Coupon) => (
          <CouponCard
            key={coupon.id}
            title={coupon.title}
            description={coupon.description}
            imgUrl={coupon.imgUrl}
            badgeIcon={coupon.badgeIcon}
            badgeTitle={coupon.badgeTitle}
            actionBtn
          />
        ))}
      </div>
    </div>
  )
}

export default CouponList
