'use client'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import React, { memo } from 'react'

interface CardCouponPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    <button
      {...rest}
      className={`${className} group flex flex-col items-center justify-center gap-2`}
      onClick={() => Router.push(href)}
    >
      <Image
        width={144}
        height={144}
        alt={content}
        className="h-[126px] w-[126px] rounded-full sm:h-[144px] sm:w-[144px]"
        src={`${imgUrl}` || '/images/no-img.webp'}
      />
      <Link
        className="h-10 w-[160px] text-center text-sm font-bold uppercase group-hover:underline sm:h-14"
        href={href}
      >
        {typeof content === 'string' ? content : 'Invalid content'}
      </Link>
    </button>
  )
}

export default memo(CardCoupon)
