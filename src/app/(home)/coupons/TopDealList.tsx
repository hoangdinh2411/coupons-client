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
    <div className=" mx-auto  py-6">
      <section className="flex items-center gap-4 mb-6">
        <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
          <Image
            src={bestDeal.imgUrl ?? ''}
            alt=""
            className="w-full h-full object-contain"
            width={128}
            height={128}
          />
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
            {bestDeal.title}
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
            {bestDeal.description}
          </p>
          <div className="flex items-center mt-2">
            <Image
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
              src={'/images/cashback-bolt.svg'}
            />
            <a
              href={bestDeal.link}
              className="md:ml-2 text-slate-800 leading-4 font-semibold hover:underline"
            >
              {bestDeal.stringValueInfo}
            </a>
            <GrLinkNext
              size={20}
              className="sm:ml-2 size-[20px] text-gray-600"
            />
          </div>
        </div>
        {!isMobile && (
          <button className="border-1 cursor-pointer border-slate-700 text-gray-800 font-bold py-2 px-4 rounded-full">
            View more deals
          </button>
        )}
      </section>

      <section className="relative glide group" ref={glideRef}>
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
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          data-glide-el="controls"
        >
          <button
            className="glide__arrow glide__arrow--left bg-white border border-gray-300 shadow-md rounded-full w-10 h-10 flex items-center justify-center ml-2 hover:bg-gray-100"
            data-glide-dir="<"
          >
            <GrFormPrevious size={20} />
          </button>
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          data-glide-el="controls"
        >
          <button
            className="glide__arrow glide__arrow--right bg-white border border-gray-300 shadow-md rounded-full w-10 h-10 flex items-center justify-center mr-2 hover:bg-gray-100"
            data-glide-dir=">"
          >
            <MdNavigateNext size={20} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6" data-glide-el="controls[nav]">
          {topDealList.map((_, i) => (
            <button
              key={i}
              className="glide__bullet w-8 h-1 rounded-full bg-gray-300 mx-1 hover:bg-gray-500 transition-all duration-300"
              data-glide-dir={`=${i}`}
            />
          ))}
        </div>
      </section>
      <div className="w-full mb-10 flex justify-center">
        {isMobile && (
          <button className="border-1 text-[12px] mx-auto mt-10 cursor-pointer border-slate-700 text-gray-800 font-bold py-[6px] px-[16px] rounded-full">
            View more deals
          </button>
        )}
      </div>
    </div>
  )
}

export default TopDealList
