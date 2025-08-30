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

function CouponCard({ coupon, className = '' }: CouponCardWithDataPropsType) {
  const pathname = usePathname()

  const handleClick = () => {
    window.open(
      `${pathname}?outClicked=true&referenceId=${coupon.id}`,
      '_blank',
    )
    if (coupon?.offer_link || coupon?.store?.url) {
      window.location.href = coupon?.offer_link || coupon?.store?.url || ''
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`${className} focus:outline-green rounded-2xl border-white py-2 outline-1 outline-transparent md:mb-0`}
    >
      <div
        className={`relative flex h-full min-h-[120px] w-full cursor-pointer gap-3 rounded-xl bg-white py-0 text-left focus:border-2 md:h-auto md:flex-col md:border-1 md:border-gray-300 md:py-4`}
      >
        <span className="bg-light-green/50 text-olive-green absolute top-2 left-2 hidden rounded-full px-3 text-sm font-bold md:block">
          {formatDiscount(coupon)}
        </span>
        {/* Image Container */}
        <div className="relative flex aspect-[1/0.8] h-24 max-h-24 max-w-[110px] justify-between md:mb-2 md:aspect-[2/1.1] md:max-h-full md:w-full md:max-w-full">
          <Image
            className="h-full w-full rounded-xl object-contain object-center md:rounded-none md:rounded-t-xl"
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
          <div className="flex-1 space-y-1 p-2 lg:p-3">
            {/* Title - Removed fixed height */}
            <h2 className="line-clamp-1 text-sm font-extrabold tracking-widest text-gray-900 uppercase md:mb-2">
              {coupon.title}
            </h2>

            {/* Description - Fixed line-clamp for desktop */}
            <p className="line-clamp-1 text-xs leading-4 font-semibold text-gray-800 md:!line-clamp-3 md:text-sm md:leading-5">
              {coupon.offer_detail}
            </p>
          </div>
          <span className="bg-light-green/50 text-olive-green absolute right-2 bottom-2 block rounded-full px-3 text-sm font-bold md:hidden">
            {formatDiscount(coupon)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default memo(CouponCard)
