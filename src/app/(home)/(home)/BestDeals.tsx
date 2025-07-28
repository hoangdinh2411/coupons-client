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
    perPage: 2,
    perMove: 2,
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
      <div className="scrollbar-hide -mr-4 -mb-8 -ml-8 px-8 pb-8 font-bold">
        <Splide options={splideOptions}>
          {bestDeals.map((deal) => (
            <SplideSlide key={deal.deal_id}>
              <Link
                href={deal.deal_link}
                className="flex h-[170px] w-full min-w-80 justify-between rounded-xl bg-white text-black shadow-lg transition-shadow duration-300 ease-out hover:shadow-xl lg:w-1/3 lg:min-w-0"
              >
                <div className="flex flex-col pr-4 pl-5">
                  <p className="my-4 text-sm leading-tight font-semibold">
                    {deal.deal_title}
                  </p>
                  <p className="text-xs tracking-widest uppercase underline underline-offset-4">
                    Shop Now
                  </p>
                </div>
                <Image
                  src={deal.deal_image}
                  alt={deal.deal_title}
                  width={160}
                  height={170}
                  className="flex h-full shrink-0 justify-end overflow-hidden rounded-xl"
                />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    )
  }

  return (
    <div className="scrollbar-hide -mr-4 -mb-8 -ml-8 flex items-center gap-4 overflow-x-auto px-8 pb-8 font-bold">
      {bestDeals.map((deal) => (
        <Link
          href={deal.deal_link}
          className="flex h-[170px] w-full min-w-80 justify-between rounded-xl bg-white text-black shadow-lg transition-shadow duration-300 ease-out hover:shadow-xl lg:w-1/3 lg:min-w-0"
          key={deal.deal_id}
        >
          <div className="flex flex-col pr-4 pl-5">
            <p className="my-4 text-sm leading-tight font-semibold">
              {deal.deal_title}
            </p>
            <p className="text-xs tracking-widest uppercase underline underline-offset-4">
              Shop Now
            </p>
          </div>
          <Image
            src={deal.deal_image}
            alt={deal.deal_title}
            width={160}
            height={170}
            className="flex h-full shrink-0 justify-end overflow-hidden rounded-xl"
          />
        </Link>
      ))}
    </div>
  )
}
