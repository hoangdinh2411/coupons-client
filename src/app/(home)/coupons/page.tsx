'use client'
import CouponCard from '@/components/card/CouponCard'
const COUPON_CARD = Array.from({ length: 20 }, (_, i) => ({
  id: `coupon-${i + 1}`,
  title: `Mattress Firm`,
  description: 'July 4th Sale! Up to 70% Off Select Mattresses',
  imgUrl: `/images/brandCard.webp`,
  badgeIcon: '/images/fire.svg',
  badgeTitle: '15% Off',
}))
export default function CouponsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] ">
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {COUPON_CARD.map((coupon) => (
            <CouponCard
              key={coupon.id}
              title={coupon.title}
              description={coupon.description}
              imgUrl={coupon.imgUrl}
              badgeIcon={coupon.badgeIcon}
              badgeTitle={coupon.badgeTitle}
              actionBtn
              onClick={() => alert(`Clicked on ${coupon.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
