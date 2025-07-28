'use client'
import React from 'react'
import CardAccordion from '../accordion/CardAccordion'
import { CouponData } from '@/types/coupon.type'
import { usePathname } from 'next/navigation'
import dayjs from 'dayjs'

function CouponCardAccordion(coupon: CouponData) {
  const pathname = usePathname()
  const handleClick = () => {
    // open a new tab/window at the same URL
    window.open(
      `${pathname}?outClicked=true&referenceId=${coupon.id}`,
      '_blank',
      'noopener,noreferrer',
    )
    if (coupon?.offer_link || coupon?.store?.url) {
      window.location.href = coupon?.offer_link || coupon?.store?.url || ''
    }
  }
  const isLimitedTimeCoupon = coupon.expire_date
    ? dayjs(coupon.expire_date).isSame(dayjs(), 'month')
    : false
  return (
    <div className="mb-2 min-h-[75px] rounded-lg border-1 border-gray-200 bg-white px-3 py-3 md:px-6 md:hover:shadow-lg md:hover:shadow-gray-200/50 lg:mb-4 lg:px-6">
      <div
        onClick={handleClick}
        className="card-top focus:border-green flex cursor-pointer gap-4 self-center border-2 border-white focus-within:border-2 lg:gap-8"
      >
        <div className="text-green mx-0 flex w-fit min-w-30 flex-col self-center text-left text-xl font-extrabold tracking-tight uppercase sm:row-span-3 sm:row-start-1 sm:mx-auto sm:pt-1 sm:pb-2 md:mx-0 md:text-3xl lg:tracking-wide">
          <p className="w-fit">Up to </p>
          <p className="w-fit"> {coupon.discount}% </p>
          <p className="w-fit">Off</p>
        </div>
        <div className="flex flex-1 flex-col items-start gap-2">
          <div className="mt-1 mb-1 w-full pr-3 text-base font-medium tracking-tight capitalize sm:text-[22px] lg:col-span-1 lg:leading-normal lg:font-semibold">
            <div className="flex items-center gap-2">
              <span className="mt-auto inline-block rounded-sm bg-gray-200 px-1 text-xs font-bold tracking-tight">
                {coupon.type}
              </span>
            </div>
            <p>{coupon.title}</p>
          </div>
          <div className="flex items-center gap-1">
            {coupon.total_interested_users !== 0 && (
              <span className="bg-light-green block rounded-sm px-1 text-xs font-semibold tracking-tight">
                {coupon.total_interested_users} interested users
              </span>
            )}

            {isLimitedTimeCoupon && (
              <span className="block rounded-sm bg-gray-100 px-1 text-xs font-semibold tracking-tight">
                Limited time
              </span>
            )}
          </div>
        </div>
        <button className="bg-green relative mb-2 hidden h-12 !w-[192px] cursor-pointer items-center justify-center self-center overflow-hidden rounded-3xl text-base leading-none font-[800] tracking-wider text-white before:absolute before:-top-3 before:-right-5 before:z-10 before:h-8 before:w-12 before:rotate-45 before:bg-gray-300 after:absolute after:-top-4 after:-right-4 after:h-12 after:w-12 after:rotate-45 after:rounded-full after:bg-gray-200/30 md:block">
          Show code
        </button>
      </div>
      <CardAccordion
        className="hidden md:block"
        content={<p>{coupon.offer_detail}</p>}
      />
    </div>
  )
}

export default CouponCardAccordion
