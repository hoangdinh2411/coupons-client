import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Link from 'next/link'
import Image from 'next/image'
import { CouponData } from '@/types/coupon.type'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { METADATA } from '@/helpers/config'
import { formatDiscount } from '@/helpers/format'

const TopDealsSplide = ({ topDeals }: { topDeals: CouponData[] }) => {
  return (
    <>
      <Splide
        className="top-deals-splide mx-auto max-w-(--max-width)"
        options={{
          type: 'loop',
          autoWidth: true,
          pagination: true,
          autoplay: true,
          perPage: 3,
          autoScroll: {
            speed: 1,
          },
          classes: {
            arrow:
              'splide__arrow !bg-white rounded-full border border-gray-300 !p-2',
            pagination:
              ' splide__pagination !-bottom-4 !outline-none !border-none',
          },
        }}
        hasTrack={false}
      >
        <SplideTrack className="">
          {topDeals.map((coupon, index) => (
            <SplideSlide
              className="!mx-2 w-[80%] shadow-lg md:w-[40%] lg:hover:shadow-xl xl:w-[28%]"
              key={index}
            >
              <Link href="#" className="block rounded-lg">
                <div className="grid grid-cols-9 border border-[#f3f3f3]">
                  <div className="col-span-4 flex h-full items-center justify-center bg-white p-1">
                    <Image
                      src={formatImageUrl(coupon.store?.image?.public_id)}
                      alt={METADATA.APP_URL + ' image'}
                      className=""
                      loading="lazy"
                      width="125"
                      height="125"
                    />
                  </div>
                  <div className="col-span-5 flex h-36 flex-col gap-y-2 bg-[#F7F7F7] p-3">
                    <div className="inline-flex">
                      <span className="inline-flex h-6 items-center rounded-md border border-[#E0E0E0] bg-white py-1 pr-1 text-xs leading-none font-semibold tracking-widest uppercase">
                        <div className="relative h-6 w-6">
                          <Image src={'/images/fire.svg'} alt="Fire" fill />
                        </div>
                        <span className="pt-px">
                          {formatDiscount(coupon)} Off
                        </span>
                      </span>
                    </div>
                    <div className="flex grow flex-col justify-between">
                      <p className="line-clamp-3 text-xs font-medium">
                        {coupon.store?.name}
                      </p>
                      <div className="flex items-center justify-center gap-x-1 sm:justify-normal">
                        <Link
                          href={`/stores/${coupon.store?.slug}`}
                          className="rounded-full bg-gray-200 px-2.5 py-2 text-xs font-bold whitespace-nowrap text-black sm:px-4"
                        >
                          Check price
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  )
}

export default TopDealsSplide
