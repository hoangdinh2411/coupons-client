/* eslint-disable react/no-children-prop */
'use client'
import CouponCard from '@/components/card/CouponCard'
import React, { useState } from 'react'
import ModalCoupon from './ModalCoupon'

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
  const [openCoupon, setOpenCoupon] = useState({
    id: '',
    isOpen: false,
  })
  const handleOpenCouponModal = (id: string) => {
    setOpenCoupon({ id, isOpen: true })
  }
  const handleCloseCouponModal = () => {
    setOpenCoupon((pre) => ({ ...pre, isOpen: false }))
  }

  return (
    <>
      <div>
        <div
          className={`mb-16 grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-2 lg:grid-cols-5`}
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
              onClick={(e) => {
                e.preventDefault()
                handleOpenCouponModal(`${coupon.id}`)
              }}
            />
          ))}
        </div>
      </div>
      <ModalCoupon
        handleCloseCouponModal={handleCloseCouponModal}
        openCoupon={openCoupon}
      />
    </>
  )
}

export default CouponList
