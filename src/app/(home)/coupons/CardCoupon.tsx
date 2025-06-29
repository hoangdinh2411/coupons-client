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
        width={100}
        height={100}
        alt={content}
        className="h-28 w-28 rounded-full"
        src={`${imgUrl}` || '/images/no-img.webp'}
      />
      <Link
        className="w-[160px] text-center font-bold uppercase group-hover:underline"
        href={href}
      >
        {typeof content === 'string' ? content : 'Invalid content'}
      </Link>
    </button>
  )
}

export default memo(CardCoupon)
