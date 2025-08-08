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
      className="group mb-auto flex flex-col items-center justify-between"
    >
      <div className="relative mx-auto mb-3 size-[32px] overflow-hidden rounded-full border border-[#003b95] bg-[#003b95] p-4 transition-shadow duration-300 ease-out group-hover:shadow-xl sm:size-[48px] md:size-[80px] md:p-5">
        <Image
          src={category.image?.url ?? '/images/no-img.webp'}
          alt={category.name}
          fill
          priority
          quality={100}
          sizes="80px"
          className="aspect-square h-auto w-full object-contain"
        />
      </div>
      <div className="mx-auto text-center text-xs leading-tight group-hover:underline group-hover:underline-offset-4 lg:text-sm">
        <p>{category.name}</p>
      </div>
    </Link>
  )
}
