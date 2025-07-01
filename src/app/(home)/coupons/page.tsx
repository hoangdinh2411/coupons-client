'use client'

import CouponCard from '@/components/card/CouponCard'
const COUPON_CARD = Array.from({ length: 20 }, (_, i) => ({
  id: `coupon-${i + 1}`,
  title: `Coupon ${i + 1}`,
  description: 'Giảm giá đặc biệt cho sản phẩm mới!',
  imgUrl: `/images/palette.png`,
}))
export default function CouponsPage() {
  return (
    <div className="mx-auto w-full max-w-[1380px]">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {COUPON_CARD.map((coupon) => (
          <CouponCard
            key={coupon.id}
            title={coupon.title}
            description={coupon.description}
            imgUrl={coupon.imgUrl}
            actionBtn
            onClick={() => alert(`Clicked on ${coupon.id}`)}
          />
        ))}
      </div>
    </div>
  )
}
