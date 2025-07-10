'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const BLOG_CATEGORIES = [
  {
    category_id: '1',
    category_name: 'Budget',
    category_slug: '',
    category_image: '/images/blog-budget-124x124.webp',
  },
  {
    category_id: '2',
    category_name: 'Beauty',
    category_slug: '',
    category_image: '/images/blog-beauty-124x124.webp',
  },
  {
    category_id: '3',
    category_name: 'Fashion',
    category_slug: '',
    category_image: '/images/blog-fashion-124x124.webp',
  },
  {
    category_id: '4',
    category_name: 'Home',
    category_slug: '',
    category_image: '/images/blog-home-124x124.webp',
  },
  {
    category_id: '5',
    category_name: 'Tech',
    category_slug: '',
    category_image: '/images/blog-tech-124x124.webp',
  },
  {
    category_id: '6',
    category_name: 'Travel',
    category_slug: '',
    category_image: '/images/blog-travel-124x124.webp',
  },
  {
    category_id: '7',
    category_name: 'Deals',
    category_slug: '',
    category_image: '/images/blog-deals-124x124.webp',
  },
  {
    category_id: '8',
    category_name: 'Calendar',
    category_slug: '',
    category_image: '/images/blog-calendar-124x124.webp',
  },
]
export default function CategoryList() {
  return (
    <Splide
      className="hidden lg:block"
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
      {BLOG_CATEGORIES.map((category) => (
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
