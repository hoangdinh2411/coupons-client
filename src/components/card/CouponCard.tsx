'use client'

import Image from 'next/image'
import React, { memo } from 'react'
import { usePathname } from 'next/navigation'
import { CouponData } from '@/types/coupon.type'

// Interface for using with CouponData object
export interface CouponCardWithDataPropsType {
  coupon: CouponData
  className?: string
}

// Interface for using with individual props
export interface CouponCardWithPropsType {
  title: string
  description: string
  imgUrl: string
  badgeIcon?: string | null
  badgeTitle?: string
  actionBtn?: boolean
  className?: string
}

export type CouponCardPropsType =
  | CouponCardWithDataPropsType
  | CouponCardWithPropsType

// Type guard to check if props contain coupon object
function isCouponDataProps(
  props: CouponCardPropsType,
): props is CouponCardWithDataPropsType {
  return 'coupon' in props
}

function CouponCard(props: CouponCardPropsType) {
  const pathname = usePathname()

  // Extract data based on prop type
  const { className } = props
  let title: string
  let description: string
  let imgUrl: string
  let actionBtn: boolean = false

  if (isCouponDataProps(props)) {
    // Using CouponData object
    const { coupon } = props
    title = coupon.title
    description = coupon.offer_detail
    imgUrl = coupon.store?.image?.url ?? '/images/no-img.webp'
  } else {
    // Using individual props
    title = props.title
    description = props.description
    imgUrl = props.imgUrl
    actionBtn = props.actionBtn ?? false
  }

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
              alt={`${title} - coupon deal image`}
              src={imgUrl}
              loading="lazy"
              sizes="(min-width: 768px) 25vw, (min-width: 1024px) 20vw, 50vw"
            />
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-1 md:p-[8px] lg:p-3">
            <p className="mb-1 line-clamp-2 min-h-10 overflow-hidden text-[12px] font-[800] tracking-widest text-ellipsis uppercase">
              {title}
            </p>
            <p className="line-clamp-2 overflow-hidden text-[16px] leading-4 font-[600] text-ellipsis text-gray-800 md:leading-5 lg:min-h-10">
              {description}
            </p>
          </div>
          <div className="cursor-pointer justify-end md:mb-3 lg:mt-2 lg:ml-2">
            <button className="rounded-2xl bg-gray-100 px-4 py-1 text-xs font-[900] text-gray-800">
              {actionBtn ? 'Get Deal' : 'Coupon code'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CouponCard)
