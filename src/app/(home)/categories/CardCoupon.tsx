'use client'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { CategoryData } from '@/types/category.type'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

interface CardCouponPropsType
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  category: CategoryData
  priority?: boolean
  isAboveFold?: boolean
}

function CardCoupon({
  category,
  className = '',
  priority = false,
  isAboveFold = false,
  ...rest
}: CardCouponPropsType) {
  return (
    <Link
      href={'/coupons/' + category.slug}
      {...rest}
      className={`${className} group flex flex-col items-center justify-center gap-2`}
    >
      <div className="relative aspect-square h-[126px] w-[126px] overflow-hidden rounded-full sm:h-[144px] sm:w-[144px]">
        <Image
          fill
          alt={`${category.name} category`}
          className="bg-white object-cover"
          src={formatImageUrl(category.image.public_id)}
          fetchPriority={priority ? 'high' : 'low'}
          loading={isAboveFold ? 'eager' : 'lazy'}
          sizes="(min-width: 640px) 144px, 126px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli+AVylxpWjBcn0swJGAUzAAOy/EsOt8SWczBUnAgwDGcFXuF5qCPGFbqgV7Jyom7PoLXjK3Xf7sOXlgQ1nFnYJq2pQBLQMJU="
          priority={priority}
        />
      </div>
      <p className="h-10 max-w-[128px] text-center text-sm font-bold break-all uppercase group-hover:underline sm:h-14">
        {category.name}
      </p>
    </Link>
  )
}

export default memo(CardCoupon)
