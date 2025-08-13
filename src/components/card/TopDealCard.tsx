'use client'
import Image from 'next/image'
import React, { memo } from 'react'
import Link from 'next/link'
import { CouponData } from '@/types/coupon.type'
import { METADATA } from '@/helpers/config'

export interface TopDealCardPropsType {
  coupon: CouponData
  className?: string
  actionBtn?: boolean
}

function TopDealCard({
  coupon,
  className = '',
  actionBtn,
}: TopDealCardPropsType) {
  const handleMoreDetail = () => {
    window.open(coupon.offer_link, '_blank', 'noopener noreferrer nofollow')
  }

  return (
    <div className="card-outline my-2 rounded-xl p-2 hover:shadow-md">
      <Link
        href={coupon.offer_link ?? ''}
        target="_blank"
        className={`${className} relative !max-w-[270px]`}
      >
        <div
          className={`relative flex w-full cursor-pointer gap-2 text-left shadow-lg md:h-auto lg:min-h-[140px]`}
        >
          <div className="relative md:mb-2">
            <div className="relative aspect-[127/144] w-[127px] overflow-hidden md:aspect-[125/120] md:w-[125px] lg:aspect-[125/125] lg:w-[125px] xl:w-30">
              <Image
                className="rounded-xl border bg-white object-contain object-center p-2 md:rounded-none md:border-0"
                fill
                alt={`${METADATA.NAME} ${coupon.store?.name || coupon.title} store logo`}
                src={coupon.store?.image?.url ?? '/images/no-img.webp'}
                sizes="(min-width: 1280px) 120px, (min-width: 1024px) 125px, (min-width: 768px) 125px, 127px"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-between overflow-hidden bg-gray-100 p-2">
            <div className="space-y-1 md:p-[8px] lg:p-0">
              <p className="mb-1 line-clamp-2 overflow-hidden text-[12px] font-[800] text-ellipsis uppercase">
                {coupon.title}
              </p>
              <p className="truncate text-[12px] leading-4 font-[600] text-gray-700 md:text-[16px] md:leading-5">
                {coupon.offer_detail}
              </p>
            </div>
            {actionBtn && (
              <button
                onClick={handleMoreDetail}
                className="mx-auto my-2 flex w-[102px] cursor-pointer justify-center rounded-2xl bg-gray-200 px-2 py-1 text-center text-sm text-[12px] font-[900] text-gray-900 sm:mx-0 lg:my-0"
              >
                Check price
              </button>
            )}
          </div>
        </div>
      </Link>{' '}
    </div>
  )
}
export default memo(TopDealCard)
