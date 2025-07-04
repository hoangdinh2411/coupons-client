'use client'

import Image from 'next/image'
import React, { ButtonHTMLAttributes } from 'react'
import Badge from '../badge'

export interface CouponCardPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  badgeIcon?: string
  badgeTitle?: string
  imgUrl?: string
  description: string
  actionBtn?: boolean
  className?: string
}

export default function CouponCard(props: CouponCardPropsType) {
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
    <button
      className={` ${className} focus:border-green focus:border-2 relative cursor-pointer lg:min-h-[278px] w-full  md:h-auto md:border-1 md:border-gray-300 rounded-xl  text-left flex md:flex-col gap-2 bg-white`}
      {...rest}
    >
      <div className="relative md:mb-2">
        {badgeTitle && badgeIcon && (
          <div className="absolute !z-30  top-2 left-2">
            <Badge imageIcon={badgeIcon} text={badgeTitle} />
          </div>
        )}
        <div className="relative md:w-full w-[144px] h-[108px] md:h-[120px] lg:h-[125px] flex items-center justify-center overflow-hidden md:rounded-t-xl md:rounded-none rounded-xl">
          <Image
            className="object-contain rounded-xl  px-10  md:rounded-none border border-gray-200 md:border-0  object-center w-[100%] h-[100%]"
            height={125}
            width={300}
            alt="coupon image"
            src={imgUrl}
          />
        </div>
      </div>
      <div className="flex justify-between flex-col">
        <div className=" space-y-1 md:p-[8px] lg:p-3">
          <div className="text-[12px] mb-1 font-[800] uppercase">{title}</div>
          <div className="text-[16px] leading-5 font-[600] text-gray-800">
            {description}
          </div>
        </div>
        {actionBtn && (
          <div className="mx-2 my-3 cursor-pointer">
            <span className="text-gray-800 font-bold rounded-2xl bg-gray-100 px-4 py-1 text-sm">
              Coupon code
            </span>
          </div>
        )}
      </div>
    </button>
  )
}
