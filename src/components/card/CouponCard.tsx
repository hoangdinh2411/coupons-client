'use client'

import Image from 'next/image'
import React, { memo } from 'react'
import { usePathname } from 'next/navigation'
import { CouponData } from '@/types/coupon.type'

export interface CouponCardPropsType {
  coupon: CouponData
  className?: string
}

function CouponCard({ coupon, className }: CouponCardPropsType) {
  const pathname = usePathname()
  const handleClick = () => {
    // open a new tab/window at the same URL
    window.open(`${pathname}?outClicked=true`, '_blank', 'noopener,noreferrer')
    window.location.href = 'https://google.com'

    // update the current tab’s URL to just “#”
    // (this keeps you on the same page but changes the URL in the address bar)
  }
  return (
    <div
      onClick={handleClick}
      className={`${className} focus:outline-green mb-3 rounded-2xl border-white py-2 outline-1 outline-transparent md:mb-0`}
    >
      <div
        className={`relative flex h-full w-full cursor-pointer gap-2 rounded-xl text-left focus:border-2 md:h-auto md:flex-col md:border-1 md:border-gray-300`}
      >
        <div className="relative aspect-[1/0.8] w-full md:mb-2 md:aspect-[2/1.1] md:w-full">
          <div className="relative size-full overflow-hidden rounded-xl md:rounded-none md:rounded-t-xl">
            <Image
              className="overflow-hidden rounded-xl border border-gray-200 object-cover object-center md:rounded-none md:border-0"
              fill
              alt={coupon.title + ' image'}
              src={coupon.store?.image?.url ?? '/images/no-img.webp'}
            />
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-1 md:p-[8px] lg:p-3">
            <p className="mb-1 line-clamp-2 min-h-10 overflow-hidden text-[12px] font-[800] tracking-widest text-ellipsis uppercase">
              {coupon.title}
            </p>
            <p className="line-clamp-2 overflow-hidden text-[16px] leading-4 font-[600] text-ellipsis text-gray-800 md:leading-5 lg:min-h-10">
              {coupon.offer_detail}
            </p>
          </div>
          <div className="cursor-pointer justify-end md:mb-3 lg:mt-2 lg:ml-2">
            <button className="rounded-2xl bg-gray-100 px-4 py-1 text-xs font-[900] text-gray-800">
              Coupon code
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CouponCard)
