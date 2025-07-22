'use client'
import CategoryDealItem from '@/components/category-deal-item/CategoryDealItem'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

interface CategoryDealListProps {
  categories: {
    category_id: string
    category_title: string
    category_value: string | number
    category_link: string
    category_imgUrl: string
    category_icon: string
  }[]
}

export default function CategoryDealList({
  categories,
}: CategoryDealListProps) {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 8,
        perMove: 2,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
        arrows: true,
        pagination: false,
        drag: true,
        flickMaxPages: 1,
        breakpoints: {
          768: {
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
      className="splide-container"
    >
      {categories.map((category) => (
        <SplideSlide key={category.category_id}>
          <CategoryDealItem category={category} />
        </SplideSlide>
      ))}
    </Splide>
  )
}
