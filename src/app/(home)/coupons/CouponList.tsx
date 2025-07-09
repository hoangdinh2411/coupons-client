'use client'
import CouponCard from '@/components/card/CouponCard'
import React from 'react'

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
        className={`mb-16 grid grid-cols-1 gap-[28px] md:grid-cols-4 md:gap-4 lg:grid-cols-5`}
      >
        {coupons.map((coupon) => (
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
  )
}

export default CouponList
