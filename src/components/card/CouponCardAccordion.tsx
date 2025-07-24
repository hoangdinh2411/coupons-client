'use client'
import React from 'react'
import CardAccordion from '../accordion/CardAccordion'
import { CouponData } from '@/types/coupon.type'
import { CouponType } from '@/types/enum'
import { usePathname } from 'next/navigation'

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

    // update the current tab’s URL to just “#”
    // (this keeps you on the same page but changes the URL in the address bar)
  }
  return (
    <div className="mb-2 min-h-[75px] rounded-lg border-1 border-gray-200 bg-white px-3 py-3 md:px-6 md:hover:shadow-lg md:hover:shadow-gray-200/50 lg:mb-4 lg:px-6">
      <div
        onClick={handleClick}
        className="card-top focus:border-green flex cursor-pointer gap-4 border-2 border-white py-2 focus-within:border-2 lg:gap-8 lg:py-2"
      >
        <div className="text-green col-start-1 row-span-3 row-start-1 mx-0 flex w-fit flex-col self-center text-center text-xl font-extrabold tracking-tight uppercase sm:row-span-3 sm:row-start-1 sm:mx-auto sm:pt-1 sm:pb-2 md:mx-0 md:text-3xl lg:tracking-wide">
          <p className="leading-none">{coupon.type}</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="lg:max-w-[calc(100%-192px)]">
            <p className="col-start-2 row-start-2 mt-1 mb-1 self-center justify-self-start pr-3 font-sans text-base font-medium tracking-tight capitalize sm:text-[22px] lg:col-span-1 lg:leading-normal lg:font-semibold">
              {coupon.title}
            </p>
            {coupon.type === CouponType.CODE && (
              <span className="col-start-2 row-start-1 mt-auto inline-block rounded-sm bg-gray-200 px-1 py-[1px] text-[12px] font-bold tracking-tight [&>:after]:text-gray-500">
                Code
              </span>
            )}
            {/* <span className="col-start-2 row-start-1 mt-auto mr-1 hidden rounded-sm bg-gray-100 px-1 py-[1px] font-sans text-[12px] font-[500] tracking-tight md:inline-block [&>:after]:text-gray-500">
              Limited time
            </span>
            <span className="col-start-2 row-start-1 mt-auto mr-1 hidden rounded-sm bg-[#f0f5b6] px-1 py-[1px] font-sans text-[12px] font-[500] tracking-tight md:inline-block [&>:after]:text-gray-500">
              Add by MRS.INOCENIO
            </span> */}
          </div>
          <button className="bg-green relative mb-2 hidden h-12 !w-[192px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl text-base leading-none font-[800] tracking-wider text-white before:absolute before:-top-3 before:-right-5 before:z-10 before:h-8 before:w-12 before:rotate-45 before:bg-gray-300 after:absolute after:-top-4 after:-right-4 after:h-12 after:w-12 after:rotate-45 after:rounded-full after:bg-gray-200/30 md:block">
            Show code
          </button>
        </div>
      </div>
      <CardAccordion
        className="hidden md:block"
        content={<p>{coupon.offer_detail}</p>}
      />
    </div>
  )
}

export default CouponCardAccordion
