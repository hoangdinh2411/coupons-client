'use client'

import Image from 'next/image'
import React, { AnchorHTMLAttributes, memo } from 'react'
import Badge from '../badge'
import Link from 'next/link'

export interface TopDealCardPropsType
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title?: string
  badgeIcon?: string | null
  badgeTitle?: string
  imgUrl?: string
  description: string
  actionBtn?: boolean
  className?: string
  link?: string
}

function TopDealCard(props: TopDealCardPropsType) {
  const {
    className = '',
    title,
    badgeIcon = '',
    badgeTitle = '',
    imgUrl = '',
    description,
    actionBtn,
    link,
    ...rest
  } = props

  return (
    <div className="card-outline my-2 rounded-xl p-2 hover:shadow-md">
      <Link
        href={link ?? ''}
        {...rest}
        className={`${className} relative !max-w-[270px]`}
      >
        <div
          className={`relative flex w-full cursor-pointer gap-2 text-left shadow-lg md:h-auto lg:min-h-[140px]`}
        >
          <div className="relative md:mb-2">
            {badgeTitle && badgeIcon && (
              <div className="absolute top-2 left-2 !z-30">
                <Badge imageIcon={`${badgeIcon}`} text={badgeTitle} />
              </div>
            )}
            <div className="lg-[119px] relative flex h-[144px] w-[127px] items-center justify-center overflow-hidden md:h-[120px] lg:h-[125px] lg:w-[125px] xl:w-30">
              <Image
                className="size-full rounded-xl border bg-white object-contain object-center px-2 md:rounded-none md:border-0"
                height={125}
                width={80}
                alt="coupon image"
                src={imgUrl}
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-between bg-gray-100 p-2">
            <div className="space-y-1 md:p-[8px] lg:p-0">
              <div className="mb-1 text-[12px] font-[800] uppercase">
                {title}
              </div>
              <div className="text-[12px] leading-4 font-[600] text-gray-700 md:text-[16px] md:leading-5">
                {description}
              </div>
            </div>
            {actionBtn && (
              <button className="mx-auto my-2 flex w-[102px] cursor-pointer justify-center rounded-2xl bg-gray-200 px-2 py-1 text-center text-sm text-[12px] font-[900] text-gray-900 sm:mx-0 lg:my-0">
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
