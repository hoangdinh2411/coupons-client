import Image from 'next/image'
import Link from 'next/link'

interface CategoryDealItemProps {
  category: {
    category_id: string
    category_title: string
    category_value: string | number
    category_imgUrl: string
    category_icon: string
  }
}

export default function CategoryDealItem({ category }: CategoryDealItemProps) {
  return (
    <Link
      href={`/coupons/${category.category_id}`}
      key={category.category_id}
      className="group mb-auto"
    >
      <div className="mb-3 overflow-hidden rounded-full border border-[#003b95] bg-[#003b95] p-4 transition-shadow duration-300 ease-out group-hover:shadow-xl md:h-32 md:w-32 md:p-5">
        <Image
          src={category.category_imgUrl}
          alt={category.category_title}
          width={86}
          height={86}
          className="aspect-square h-auto w-full object-contain"
        />
      </div>
      <div className="mx-auto max-w-28 text-center text-xs leading-tight group-hover:underline group-hover:underline-offset-4 lg:text-sm">
        <Image
          src={category.category_icon}
          alt={category.category_title}
          width={16}
          height={16}
          className="-mr-1 mb-1 inline-block h-4 w-4 group-hover:animate-bounce"
        />
        <strong className="lg:mr-2">{category.category_value}%</strong>
        <div>{category.category_title}</div>
      </div>
    </Link>
  )
}
