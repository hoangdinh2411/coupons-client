'use client'

import Image from 'next/image'
import React, { memo } from 'react'
import Badge from '../badge'
import Link from 'next/link'

export interface CouponCardPropsType
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title?: string
  badgeIcon?: string | null
  badgeTitle?: string
  imgUrl?: string
  description: string
  actionBtn?: boolean
  className?: string
}

function CouponCard(props: CouponCardPropsType) {
  const {
    className = '',
    title,
    badgeIcon = '',
    badgeTitle = '',
    imgUrl = '',
    description,
    actionBtn,
    ...rest
  } = props

  return (
    <Link
      href="#"
      className={`${className} focus:outline-green mb-5 rounded-2xl border-white py-2 outline-1 outline-transparent md:mb-0`}
      {...rest}
    >
      <div
        className={`relative flex h-full w-full cursor-pointer gap-2 rounded-xl bg-white text-left focus:border-2 md:h-auto md:flex-col md:border-1 md:border-gray-300`}
      >
        <div className="relative aspect-[1/0.8] h-full w-[140px] md:mb-2 md:aspect-[2/1.1] md:w-full">
          {badgeTitle && badgeIcon && (
            <div className="absolute top-2 left-2">
              <Badge imageIcon={badgeIcon} text={badgeTitle} />
            </div>
          )}
          <div className="relative size-full rounded-xl md:rounded-none md:rounded-t-xl">
            <Image
              className="rounded-xl border border-gray-200 object-contain object-center px-10 md:rounded-none md:border-0"
              fill
              alt="coupon image"
              src={imgUrl}
            />
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-1 md:p-[8px] lg:p-3">
            <div className="mb-1 text-[12px] font-[800] tracking-widest uppercase">
              {title}
            </div>
            <div className="text-[16px] leading-4 font-[600] text-gray-800 md:leading-5 lg:min-h-10">
              {description}
            </div>
          </div>
          {actionBtn && (
            <div className="cursor-pointer justify-end md:mb-3 lg:mt-2 lg:ml-2">
              <button className="rounded-2xl bg-gray-100 px-4 py-1 text-xs font-[900] text-gray-800">
                Coupon code
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default memo(CouponCard)
