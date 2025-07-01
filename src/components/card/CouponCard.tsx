'use client'

import Image from 'next/image'
import React, { ButtonHTMLAttributes } from 'react'

export interface CouponCardPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  badge?: React.ReactElement
  imgUrl?: string
  description: string
  actionBtn?: boolean
  className?: string
}

export default function CouponCard(props: CouponCardPropsType) {
  const {
    className = '',
    title,
    badge,
    imgUrl = '',
    description,
    actionBtn,
    ...rest
  } = props

  return (
    <button
      className={` ${className} max-w-36 md:h-auto border-1 border-slate-200 rounded-lg hover:shadow-md text-left transition bg-white`}
      {...rest}
    >
      <div className="relative mb-2">
        {badge && (
          <div className="absolute top-2 left-2  px-2 py-1 text-xs font-bold rounded">
            {badge}
          </div>
        )}
        <Image
          className="-img w-full h-[180px] object-cover"
          height={180}
          width={300}
          alt="coupon image"
          src={imgUrl}
        />
      </div>
      <div className=" space-y-1 p-3">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-gray-600">{description}</div>
      </div>
      {actionBtn && (
        <div className=" mt-3">
          <span className="text-blue-500 font-medium text-sm">
            Apply Coupon
          </span>
        </div>
      )}
    </button>
  )
}
