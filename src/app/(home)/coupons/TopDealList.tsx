import TopDealCard from '@/components/card/TopDealCard'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { GrLinkNext, GrFormPrevious } from 'react-icons/gr'
import { MdNavigateNext } from 'react-icons/md'
import Glide from '@glidejs/glide'

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
  isMobile: boolean
}

function TopDealList({
  topDealList,
  bestDeal,
  isMobile,
}: TopDealListPropsType) {
  const glideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!glideRef.current) return

    const glide = new Glide(glideRef.current, {
      type: 'carousel',
      perView: 4,
      focusAt: 'center',
      breakpoints: {
        1280: { perView: 4 },
        1024: { perView: 3 },
        768: { perView: 2, peek: { before: 0, after: 60 } },
        600: { perView: 1, peek: { before: 0, after: 60 } },
      },
    })

    glide.mount()

    return () => {
      glide.destroy()
    }
  }, [topDealList])

  return (
    <div className="mx-auto py-6">
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
          <button className="cursor-pointer rounded-full border-1 border-slate-700 px-4 py-2 font-bold text-gray-800">
            View more deals
          </button>
        )}
      </section>

      <section className="glide group relative" ref={glideRef}>
        {/* Slides */}
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides mt-2">
            {topDealList.map((dealItem, index) => (
              <li className="glide__slide" key={index}>
                <TopDealCard
                  {...dealItem}
                  description={dealItem.description ?? ''}
                  actionBtn={true}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation buttons */}
        <div
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          data-glide-el="controls"
        >
          <button
            className="glide__arrow glide__arrow--left ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow-md hover:bg-gray-100"
            data-glide-dir="<"
          >
            <GrFormPrevious size={20} />
          </button>
        </div>
        <div
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          data-glide-el="controls"
        >
          <button
            className="glide__arrow glide__arrow--right mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow-md hover:bg-gray-100"
            data-glide-dir=">"
          >
            <MdNavigateNext size={20} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-6 flex justify-center" data-glide-el="controls[nav]">
          {topDealList.map((_, i) => (
            <button
              key={i}
              className="glide__bullet mx-1 h-1 w-8 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-500"
              data-glide-dir={`=${i}`}
            />
          ))}
        </div>
      </section>
      <div className="mb-10 flex w-full justify-center">
        {isMobile && (
          <button className="mx-auto mt-10 cursor-pointer rounded-full border-1 border-slate-700 px-[16px] py-[6px] text-[12px] font-bold text-gray-800">
            View more deals
          </button>
        )}
      </div>
    </div>
  )
}

export default TopDealList
