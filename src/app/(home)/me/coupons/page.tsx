import MyCouponAccordion from '@/components/accordion/MyCouponAccordion'
import { APP_ROUTERS } from '@/helpers/config'
import { getUserSavedCoupons } from '@/services/userApi'
import { CouponData } from '@/types/coupon.type'
import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'

const MyCouponsPage = async () => {
  const res = await getUserSavedCoupons()
  let coupons: CouponData[] = []
  if (res.data) {
    coupons = res.data
  }
  console.log(coupons)
  return (
    <div className="mx-auto my-4 w-full max-w-3xl flex-1 p-4">
      {/* Breadcrumbs go back */}
      <div className="mb-10 flex flex-wrap">
        <Link
          href={APP_ROUTERS.ACCOUNT}
          className="flex cursor-pointer items-center gap-1 text-sm leading-[1.33] font-bold tracking-[0.2px] text-[rgb(116,31,162)] no-underline"
        >
          <FaChevronLeft />
          <span>Account</span>
        </Link>
      </div>

      {/* Title */}
      <h3 className="text-olive-green mt-0 text-[40px] leading-[1.4] font-[450] tracking-normal [text-shadow:0px_2px_6px_rgba(0,0,0,0.04)] md:mt-6">
        My saved coupons
      </h3>

      {/* Rewards */}
      {coupons.length > 0 ? (
        <div className="my-4 w-full rounded-lg text-white shadow-[0px_5px_10px_-7px_rgba(50,50,50,0.604)]">
          {coupons.map((c) => (
            <MyCouponAccordion coupon={c} key={c.id} />
          ))}
        </div>
      ) : (
        <div>I haven&rsquo;t save any coupon</div>
      )}
    </div>
  )
}

export default MyCouponsPage
