'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

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
    <Splide
      options={{
        type: 'loop',
        perPage: 7,
        perMove: 1,
        pagination: false,
        autoplay: true,
        interval: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: false,
      }}
      aria-label="Category List"
    >
      {categories.map((category) => (
        <SplideSlide
          className="flex items-center justify-center"
          key={category.category_id}
        >
          <div className="mx-3.5 w-[94px]">
            <Link
              href={`/blogs/${category.category_slug}`}
              className="group flex flex-col items-center"
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
          </div>
        </SplideSlide>
      ))}
    </Splide>
  )
}
