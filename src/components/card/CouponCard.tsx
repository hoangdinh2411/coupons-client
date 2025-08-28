'use client'
import Image from 'next/image'
import { memo } from 'react'
import { usePathname } from 'next/navigation'
import { CouponData } from '@/types/coupon.type'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { METADATA } from '@/helpers/config'
import { formatDiscount } from '@/helpers/format'

// Interface for using with CouponData object
export interface CouponCardWithDataPropsType {
  coupon: CouponData
  className?: string
}

// Type guard to check if props contain coupon object

function CouponCard({ coupon, className }: CouponCardWithDataPropsType) {
  const pathname = usePathname()

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
        className={`relative flex h-full w-full cursor-pointer gap-3 rounded-xl bg-white pt-4 text-left focus:border-2 md:h-auto md:flex-col md:border-1 md:border-gray-300`}
      >
        <span className="bg-light-green/50 text-olive-green text-sm- absolute top-2 left-2 rounded-full px-3 font-bold">
          {formatDiscount(coupon)}
        </span>
        {/* Image Container */}
        <div className="relative flex aspect-[1/0.8] h-24 max-h-24 max-w-[110px] justify-between md:mb-2 md:aspect-[2/1.1] md:max-h-full md:w-full md:max-w-full">
          <Image
            className="h-full w-full rounded-xl border border-gray-200 object-contain object-center md:rounded-none md:rounded-t-xl md:border-0"
            alt={METADATA.APP_URL + ' image'}
            src={formatImageUrl(coupon.store?.image?.public_id)}
            width={500}
            loading="lazy"
            height={500}
            quality={75}
          />
        </div>

        {/* Content Container - Fixed the height issues */}
        <div className="flex h-full min-w-0 flex-col justify-between md:!h-[140px] md:flex-col md:justify-start">
          {/* Text Content */}
          <div className="flex-1 space-y-1 md:p-2 lg:p-3">
            {/* Title - Removed fixed height */}
            <h2 className="line-clamp-1 text-sm font-extrabold tracking-widest text-gray-900 uppercase md:mb-2">
              {coupon.title}
            </h2>

            {/* Description - Fixed line-clamp for desktop */}
            <p className="line-clamp-1 text-xs leading-4 font-semibold text-gray-800 md:!line-clamp-3 md:text-sm md:leading-5">
              {coupon.offer_detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CouponCard)
