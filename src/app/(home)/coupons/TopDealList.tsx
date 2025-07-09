'use client'

import TopDealCard from '@/components/card/TopDealCard'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GrLinkNext } from 'react-icons/gr'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
type TopDetalItemType = {
  title?: string
  icon?: string | null
  imgUrl?: string
  description?: string
  stringValueInfo?: string
  actionBtn?: boolean
  className?: string
  link?: string
}

interface TopDealListPropsType {
  topDealList: TopDetalItemType[]
  bestDeal: TopDetalItemType
}

function TopDealList({ topDealList, bestDeal }: TopDealListPropsType) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [768])
  return (
    <div className="mx-auto py-6">
      {/* Best Deal Section */}
      <section className="mb-6 flex items-center gap-4">
        <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100">
          <Image
            src={bestDeal.imgUrl ?? ''}
            alt=""
            className="h-full w-full object-contain"
            width={128}
            height={128}
          />
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
            {bestDeal.title}
          </p>
          <p className="text-xs font-semibold tracking-wider text-gray-600 uppercase">
            {bestDeal.description}
          </p>
          <div className="mt-2 flex items-center">
            <Image
              alt=""
              width={16}
              height={16}
              className="h-4 w-4"
              src={'/images/cashback-bolt.svg'}
            />
            <a
              href={bestDeal.link}
              className="leading-4 font-semibold text-slate-800 hover:underline md:ml-2"
            >
              {bestDeal.stringValueInfo}
            </a>
            <GrLinkNext
              size={20}
              className="size-[20px] text-gray-600 sm:ml-2"
            />
          </div>
        </div>
        {!isMobile && (
          <button className="cursor-pointer rounded-full border border-slate-700 px-4 py-2 font-bold text-gray-800">
            View more deals
          </button>
        )}
      </section>

      {/* Slider Section */}
      <Splide
        options={{
          autoWidth: false,
          perPage: 5,
          perMove: 1,

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
        <SplideTrack>
          {topDealList.map((dealItem, index) => (
            <SplideSlide
              className="!w-[288px] sm:!w-[320px] md:!w-[300px] lg:!w-[270px] xl:!w-[270px]"
              key={index}
            >
              <TopDealCard
                key={index}
                {...dealItem}
                description={dealItem.description ?? ''}
                actionBtn={true}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
      <div className="mb-10 flex w-full justify-center">
        {isMobile && (
          <button className="mx-auto mt-10 cursor-pointer rounded-full border border-slate-700 px-[16px] py-[6px] text-[12px] font-bold text-gray-800">
            View more deals
          </button>
        )}
      </div>
    </div>
  )
}

export default TopDealList
