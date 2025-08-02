'use client'
import CategoryDealItem from '@/app/(home)/(home)/CategoryDealItem'
import { APP_ROUTERS } from '@/helpers/config'
import UseAppStore from '@/stores/app.store'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Link from 'next/link'

export default function CategoryDealList() {
  const categories = UseAppStore((state) => state.menu.categories)
  return (
    <section className="mb-16 md:mb-20">
      <div className="mb-6 flex flex-wrap items-center justify-between lg:mb-4">
        <div className="text-sm font-bold tracking-widest uppercase">
          Categories
        </div>
        <Link
          href={APP_ROUTERS.ALL_CATEGORIES}
          className="block text-xs font-semibold tracking-widest uppercase underline underline-offset-4"
        >
          All categories
        </Link>
      </div>
      <Splide
        options={{
          type: 'loop',
          perPage: 8,
          perMove: 2,
          gap: '10px',
          autoplay: true,
          interval: 3000,
          arrows: true,
          pagination: false,
          drag: true,
          flickMaxPages: 1,
          breakpoints: {
            400: {
              perPage: 3,
            },
            600: {
              perPage: 4,
              perMove: 1,
            },
            1024: {
              perPage: 6,
              perMove: 2,
            },
            1280: {
              perPage: 8,
              perMove: 2,
            },
          },
        }}
        className="splide-container custom-splide"
      >
        {categories &&
          categories.map((category) => (
            <SplideSlide key={category.id}>
              <CategoryDealItem category={category} />
            </SplideSlide>
          ))}
      </Splide>
    </section>
  )
}
