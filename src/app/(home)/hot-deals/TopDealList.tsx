'use client'

import TopDealCard from '@/components/card/TopDealCard'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { CouponData } from '@/types/coupon.type'
import Link from 'next/link'

interface TopDealListPropsType {
  top_deals_today: CouponData[]
}

function TopDealList({ top_deals_today }: TopDealListPropsType) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [768])

  const store = top_deals_today[0]?.store
  return (
    <div className="mx-auto py-6">
      {/* Best Deal Section */}
      <section className="mb-6 flex items-center gap-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100">
          <Image
            src={store?.image?.url ?? '/images/no-img.webp'}
            alt=""
            className="h-full w-full object-cover"
            fill
            priority
          />
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
            {store?.name}
          </p>
        </div>
        {!isMobile && (
          <Link
            href={store?.url || ''}
            target="_blank"
            className="cursor-pointer rounded-full border border-slate-700 px-4 py-2 font-bold text-gray-800"
          >
            View more deals
          </Link>
        )}
      </section>

      {/* Slider Section */}
      <Splide
        className="custom-splide"
        options={{
          type: 'loop',
          autoWidth: false,
          perPage: 5,
          perMove: 1,
          classes: {
            pagination: 'splide__pagination !bottom-0 !top-full',
          },
          breakpoints: {
            0: {
              perPage: 1,
            },
            320: {
              perPage: 2,
            },
            640: {
              perPage: 2,
            },
            768: {
              perPage: 3,
            },
            1024: {
              perPage: 4,
            },
            1280: {
              perPage: 5,
            },
          },
        }}
        hasTrack={false}
      >
        <SplideTrack className="!px-1">
          {top_deals_today.map((coupon) => (
            <SplideSlide
              className="!w-[288px] overflow-hidden sm:!w-[320px] md:!w-[300px] lg:!w-[270px] xl:!w-[270px]"
              key={coupon.id}
            >
              <TopDealCard coupon={coupon} actionBtn={true} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
      <div className="mb-10 flex w-full justify-center">
        {isMobile && (
          <button className="mx-auto mt-10 cursor-pointer rounded-full border border-slate-700 px-[16px] py-2.5 text-sm font-bold text-gray-800">
            View more deals
          </button>
        )}
      </div>
    </div>
  )
}

export default TopDealList
