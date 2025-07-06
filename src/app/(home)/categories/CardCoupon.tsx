'use client'
import Image from 'next/image'
import Link from 'next/link'
// import Router from 'next/router'
import React, { memo } from 'react'

interface CardCouponPropsType
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  content: string
  href: string
  imgUrl: string
  className?: string
}

function CardCoupon({
  content,
  className = '',
  href,
  imgUrl,
  ...rest
}: CardCouponPropsType) {
  return (
    <Link
      href={href}
      {...rest}
      className={`${className} group flex flex-col items-center justify-center gap-2`}
    >
      <Image
        width={144}
        height={144}
        alt={content}
        className="h-[126px] w-[126px] rounded-full sm:h-[144px] sm:w-[144px]"
        src={`${imgUrl}` || '/images/no-img.webp'}
      />
      <p className="h-10 w-[160px] text-center text-sm font-bold uppercase group-hover:underline sm:h-14">
        {typeof content === 'string' ? content : 'Invalid content'}
      </p>
    </Link>
  )
}

export default memo(CardCoupon)
