'use client'
import Image from 'next/image'
import { memo } from 'react'
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
  const { className = '' } = props
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
    window.open(`${pathname}?outClicked=true`, '_blank')
    window.location.href = 'https://google.com'
  }

  return (
    <div
      onClick={handleClick}
      className={`${className} focus:outline-green mb-3 rounded-2xl border-white py-2 outline-1 outline-transparent md:mb-0`}
    >
      <div
        className={`relative flex h-full w-full cursor-pointer gap-3 rounded-xl bg-white text-left focus:border-2 md:h-auto md:flex-col md:border-1 md:border-gray-300`}
      >
        {/* Image Container */}
        <div className="relative flex aspect-[1/0.8] h-24 max-h-24 max-w-[110px] justify-between md:mb-2 md:aspect-[2/1.1] md:max-h-full md:w-full md:max-w-full">
          <Image
            className="h-full w-full rounded-xl border border-gray-200 object-contain object-center md:rounded-none md:rounded-t-xl md:border-0"
            alt={title + ' image'}
            src={imgUrl}
            width={500}
            height={500}
            quality={75}
          />
        </div>

        {/* Content Container - Fixed the height issues */}
        <div className="flex h-full min-w-0 flex-col justify-between md:!h-[140px] md:flex-col md:justify-start">
          {/* Text Content */}
          <div className="flex-1 space-y-1 md:p-2 lg:p-3">
            {/* Title - Removed fixed height */}
            <h2 className="line-clamp-1 text-xs font-extrabold tracking-widest text-gray-900 uppercase md:mb-2 md:line-clamp-2">
              {title}
            </h2>

            {/* Description - Fixed line-clamp for desktop */}
            <p className="line-clamp-1 text-sm leading-4 font-semibold text-gray-800 md:!line-clamp-3 md:text-base md:leading-5">
              {description}
            </p>
          </div>

          {/* Action Button */}
          {actionBtn && (
            <div className="mt-auto md:mb-3 md:px-2 lg:px-3">
              <button className="rounded-2xl bg-gray-100 px-4 py-1 text-xs font-black text-gray-800 transition-colors hover:bg-gray-200">
                Coupon code
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(CouponCard)
