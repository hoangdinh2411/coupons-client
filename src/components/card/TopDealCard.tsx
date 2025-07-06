'use client'

import Image from 'next/image'
import React, { ButtonHTMLAttributes, memo } from 'react'
import Badge from '../badge'

export interface TopDealCardPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  badgeIcon?: string | null
  badgeTitle?: string
  imgUrl?: string
  description: string
  actionBtn?: boolean
  className?: string
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
    ...rest
  } = props

  return (
    <div className="hover:!border-green rounded-lg p-2  border-white border-2">
      <button
        className={` ${className} hover:shadow-xl shadow-lg relative cursor-pointer lg:min-h-[140px] w-full  md:h-auto  text-left flex gap-2 bg-white`}
        {...rest}
      >
        <div className="relative md:mb-2">
          {badgeTitle && badgeIcon && (
            <div className="absolute !z-30  top-2 left-2">
              <Badge imageIcon={badgeIcon} text={badgeTitle} />
            </div>
          )}
          <div className="relative w-[100px] lg-[119px] h-[125px] md:h-[120px] lg:h-[125px] flex items-center justify-center overflow-hidden">
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
            <div>
              <button className="w-auto my-2 mx-2 md:mt-3 md:mb-3 cursor-pointer rounded-2xl bg-gray-200">
                <span className="text-[12px] text-gray-800 font-bold  px-4 py-2 text-sm">
                  Check price
                </span>
              </button>
            </div>
          )}
        </div>
      </button>
    </div>
  )
}
export default memo(TopDealCard)
