'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { TopicData } from '@/types/topic.type'

export default function TopicList({ topics }: { topics: TopicData[] }) {
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
      {topics.map((topic) => (
        <SplideSlide
          className="flex items-center justify-center"
          key={topic.id}
        >
          <div className="mx-3.5 w-[94px]">
            <Link
              href={`/topics/${topic.slug}`}
              className="group flex flex-col items-center"
            >
              <Image
                src={topic.image.url || '/images/no-img.webp'}
                alt={topic.name}
                width={124}
                height={124}
                className="group-hover:border-green h-auto w-full max-w-[62px] rounded-full border border-gray-300"
              />
              <span className="text-md group-hover:text-green text-olive-green mt-1.5 text-center font-semibold">
                {topic.name}
              </span>
            </Link>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  )
}
