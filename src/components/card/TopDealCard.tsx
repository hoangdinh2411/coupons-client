'use client'

import Image from 'next/image'
import React, { AnchorHTMLAttributes, memo } from 'react'
import Badge from '../badge'

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
    <a
      href={link ?? ''}
      {...rest}
      className={`${className} relative w-full rounded-2xl p-2`}
    >
      <div
        className={`hover:border-green relative flex w-full cursor-pointer gap-2 rounded-md border-2 border-white bg-white text-left shadow-lg hover:shadow-xl md:h-auto lg:min-h-[140px]`}
      >
        <div className="relative md:mb-2">
          {badgeTitle && badgeIcon && (
            <div className="absolute !z-30  top-2 left-2">
              <Badge imageIcon={badgeIcon} text={badgeTitle} />
            </div>
          )}
          <div className="lg-[119px] relative flex h-[144px] w-[144px] items-center justify-center overflow-hidden md:h-[120px] lg:h-[125px]">
            <Image
              className="object-contain rounded-xl  bg-white px-2  md:rounded-none border  md:border-0  object-center size-full"
              height={125}
              width={80}
              alt="coupon image"
              src={imgUrl}
            />
          </div>
        </div>
        <div className="flex justify-between flex-col p-2 w-full bg-[#F7F7F7]">
          <div className=" space-y-1 md:p-[8px] lg:p-3">
            <div className="text-[12px] mb-1 font-[800] uppercase">{title}</div>
            <div className="text-[12px] md:text-[16px] leading-4 md:leading-5 font-[600] text-gray-700">
              {description}
            </div>
          </div>
          {actionBtn && (
            <div className="flex">
              <span className="mx-auto my-2 w-auto cursor-pointer rounded-2xl bg-gray-200 sm:mx-2 md:mt-3 md:mb-3">
                <span className="px-4 py-2 text-sm text-[12px] font-bold text-gray-800">
                  Check price
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
    </a>
  )
}
export default memo(TopDealCard)
