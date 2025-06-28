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
      className={`${className} group flex justify-center items-center flex-col gap-2`}
      onClick={() => Router.push(href)}
    >
      <Image
        width={100}
        height={100}
        alt={content}
        className="rounded-full w-28 h-28"
        src={`${imgUrl}` || '/images/no-img.webp'}
      />
      <Link
        className="uppercase w-[160px] font-bold group-hover:underline text-center"
        href={href}
      >
        {typeof content === 'string' ? content : 'Invalid content'}
      </Link>
    </button>
  )
}

export default memo(CardCoupon)
