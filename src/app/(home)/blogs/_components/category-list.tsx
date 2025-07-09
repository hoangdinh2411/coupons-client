import Image from 'next/image'
import Link from 'next/link'

interface CategoryListProps {
  categories: {
    category_id: string
    category_name: string
    category_slug: string
    category_image: string
  }[]
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <ul className="hidden flex-wrap justify-center md:flex">
      {categories.map((category) => (
        <li key={category.category_id} className="mx-3.5 w-[94px]">
          <Link
            href={`/blogs/${category.category_slug}`}
            className="group flex flex-col items-center px-4 py-3"
          >
            <Image
              src={category.category_image}
              alt={category.category_name}
              width={124}
              height={124}
              className="group-hover:border-green h-auto w-full max-w-[62px] rounded-full border border-gray-300"
            />
            <span className="text-md group-hover:text-green text-olive-green mt-1.5 text-center font-semibold">
              {category.category_name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
