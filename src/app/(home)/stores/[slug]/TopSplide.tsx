'use client'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import React from 'react'

function TopSplide() {
  return (
    <div>
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
            arrow: 'splide__arrow !bg-transparent !size-1',
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
  )
}

export default TopSplide
