'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useIsMobile } from '@/app/hooks/useIsMobile'

interface BestDealsProps {
  bestDeals: {
    deal_id: string
    deal_title: string
    deal_image: string
    deal_link: string
  }[]
}

export default function BestDeals({ bestDeals }: BestDealsProps) {
  const isMobile = useIsMobile()
  const splideOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    autoplay: true,
    interval: 3000,
    arrows: false,
    pagination: false,
    drag: true,
    flickMaxPages: 1,
    breakpoints: {
      768: {
        perPage: 1,
        perMove: 1,
      },
      1024: {
        perPage: 2,
        perMove: 2,
      },
    },
  }

  if (isMobile) {
    return (
      <div className="scrollbar-hide pb-8 font-bold">
        <Splide options={splideOptions}>
          {bestDeals.map((deal) => (
            <SplideSlide className="h-full" key={deal.deal_id}>
              <div className="mb-4 h-[10rem] px-1">
                <Link
                  href={deal.deal_link}
                  className="flex w-full justify-between overflow-hidden rounded-xl bg-white text-black shadow-lg transition-shadow duration-300 ease-out hover:shadow-xl"
                >
                  <div className="flex flex-1 flex-col pr-4 pl-5">
                    <p className="my-4 text-sm leading-tight font-semibold">
                      {deal.deal_title}
                    </p>
                    <p className="text-xs tracking-widest uppercase underline underline-offset-4">
                      Shop Now
                    </p>
                  </div>
                  <div className="h-full w-[160px] flex-shrink-0">
                    <Image
                      src={deal.deal_image}
                      alt={deal.deal_title}
                      width={160}
                      height={170}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    )
  }

  return (
    <div className="scrollbar-hide flex items-center gap-4 overflow-x-auto px-4 pb-8 font-bold">
      {bestDeals.map((deal) => (
        <Link
          href={deal.deal_link}
          className="flex h-[170px] w-full min-w-80 justify-between overflow-hidden rounded-xl bg-white text-black shadow-lg transition-shadow duration-300 ease-out hover:shadow-xl lg:w-1/3 lg:min-w-0"
          key={deal.deal_id}
        >
          <div className="flex flex-1 flex-col pr-4 pl-5">
            <p className="my-4 text-sm leading-tight font-semibold">
              {deal.deal_title}
            </p>
            <p className="text-xs tracking-widest uppercase underline underline-offset-4">
              Shop Now
            </p>
          </div>
          <div className="relative aspect-[16/17] h-full w-[160px] flex-shrink-0">
            <Image
              src={deal.deal_image}
              alt={deal.deal_title}
              fill
              className="object-cover"
              sizes="160px"
              loading="lazy"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
