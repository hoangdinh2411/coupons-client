'use client'
import { CategoryData } from '@/types/category.type'
import Image from 'next/image'
import Link from 'next/link'
// import Router from 'next/router'
import React, { memo } from 'react'

interface CardCouponPropsType
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  category: CategoryData
}

function CardCoupon({
  category,
  className = '',
  ...rest
}: CardCouponPropsType) {
  return (
    <Link
      href={'/coupons/' + category.slug}
      {...rest}
      className={`${className} group flex flex-col items-center justify-center gap-2`}
    >
      <Image
        width={144}
        height={144}
        alt={category.name}
        className="h-[126px] w-[126px] rounded-full object-cover sm:h-[144px] sm:w-[144px]"
        src={(category.image && category.image.url) || '/images/no-img.webp'}
        objectFit="contain"
      />
      <p className="h-10 max-w-[128px] text-center text-sm font-bold break-all uppercase group-hover:underline sm:h-14">
        {category.name}
      </p>
    </Link>
  )
}

export default memo(CardCoupon)
