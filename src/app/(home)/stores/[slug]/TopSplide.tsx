'use client'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Link from 'next/link'
import React from 'react'

function TopSplide() {
  return (
    <div className="">
      <div className="hidden lg:block">
        <Splide
          className="mx-auto max-w-(--max-width)"
          options={{
            type: 'loop',
            autoWidth: false,
            pagination: false,
            autoplay: true,
            perPage: 1,
            autoScroll: {
              speed: 1,
            },
            classes: {
              arrow: 'splide__arrow !bg-transparent !size-4',
            },
          }}
          hasTrack={false}
        >
          <SplideTrack>
            <SplideSlide className="">
              <div className="py-2 text-center text-sm font-semibold text-gray-800">
                Automatically Apply The Best Codes And Cash Back Offers To Your
                Cart
              </div>
            </SplideSlide>
            <SplideSlide className="">
              <div className="py-2 text-center text-sm font-semibold text-gray-800">
                <u>Add To Your Browser! It&apos;s Free</u>
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
      <div className="font-proxima mt-1 mb-4 block text-center text-xs [grid-area:disclaimer] lg:mx-0 lg:mt-3 lg:mr-16 lg:mb-8 lg:hidden lg:text-left lg:text-sm">
        When you buy through links on RetailMeNot
        <Link className="underline" href={'/'}>
          {' '}
          we may earn a commission.
        </Link>
      </div>
    </div>
  )
}

export default TopSplide
