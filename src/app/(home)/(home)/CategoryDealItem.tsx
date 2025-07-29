import { CategoryData } from '@/types/category.type'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryDealItemProps {
  category: CategoryData
}

export default function CategoryDealItem({ category }: CategoryDealItemProps) {
  return (
    <Link
      href={`/coupons/${category.slug}`}
      key={category.id}
      className="group mb-auto"
    >
      <div className="relative mb-3 size-[86px] overflow-hidden rounded-full border border-[#003b95] bg-[#003b95] p-4 transition-shadow duration-300 ease-out group-hover:shadow-xl md:h-32 md:w-32 md:p-5">
        <Image
          src={category.image?.url || '/images/no-img.webp'}
          alt={category.name}
          fill
          loading="lazy"
          sizes="86px"
          className="aspect-square h-auto w-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-28 text-center text-xs leading-tight group-hover:underline group-hover:underline-offset-4 lg:text-sm">
        <div>{category.name}</div>
      </div>
    </Link>
  )
}
