import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface BrandImgPropsType {
  name?: string
  image?: {
    url: string
    file_name: string
    public_id: string
  }
  url: string
  className?: string
}
function BrandImg({
  name = '',
  image,
  className = '',
  url = '/',
}: BrandImgPropsType) {
  return (
    <div className={`${className} w-full lg:h-32 lg:bg-none lg:shadow-none`}>
      <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start">
        <Link href={url}>
          <div className="block size-16 rounded-[100%] bg-white shadow-xl lg:size-[208px]">
            <Image
              width={300}
              height={300}
              src={`${image?.url}`}
              alt={`${image?.file_name}`}
              className="size-full rounded-[100%] object-contain"
            />
          </div>
        </Link>
        <p className="font-sans-bold mb-3 flex min-h-16 items-center self-center text-xl leading-tight font-extrabold [grid-area:heading] lg:mt-1 lg:-mb-3 lg:hidden lg:items-center lg:self-start lg:pl-0 lg:text-4xl">
          {name} {' Coupons & promo codes'}
        </p>
      </div>
    </div>
  )
}

export default BrandImg
