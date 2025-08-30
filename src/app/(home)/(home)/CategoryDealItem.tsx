import { CategoryData } from '@/types/category.type'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryDealItemProps {
  category: CategoryData
}

export default function CategoryDealItem({ category }: CategoryDealItemProps) {
  return (
    <Link
      href={'/coupons/' + category.slug}
      className={`group flex flex-col items-center justify-center gap-2`}
    >
      <Image
        width={100}
        height={100}
        alt={category.name}
        className="size-[80px] rounded-full object-cover md:size-[100px]"
        src={`${category?.image?.url ?? '/images/no-img.webp'}`}
      />
      <p className="text-center text-sm font-bold break-all uppercase group-hover:underline">
        {category.name}
      </p>
    </Link>
  )
}
