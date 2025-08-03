'use client'
import '@glidejs/glide/dist/css/glide.core.min.css'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
const NAVBARS = [
  {
    link: '/',
    title: 'Top Picks',
    isBold: true,
  },
  {
    link: '/',
    title: 'Clothing, Shoes & Accessories',
  },
  {
    link: '/',
    title: 'Beauty & Health',
  },
  {
    link: '/',
    title: 'Home & Garden',
  },
  {
    link: '/',
    title: 'Sports, Fitness & Outdoors',
  },
  {
    link: '/',
    title: 'Laptops, Tech & Electronics',
  },
  {
    link: '/',
    title: 'Flights, Hotels & Travel',
  },
]

function Header() {
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
    <>
      {/** Gslide */}
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
            arrow: 'splide__arrow !bg-transparent !size-3',
          },
        }}
        hasTrack={false}
      >
        <SplideTrack>
          <SplideSlide className="">
            <div className="py-4 text-center text-sm font-semibold text-gray-800">
              Automatically Apply The Best Codes And Cash Back Offers To Your
              Cart
            </div>
          </SplideSlide>
          <SplideSlide className="">
            <div className="py-4 text-center text-sm font-semibold text-gray-800">
              <u>Add To Your Browser! It&apos;s Free</u>
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>

      {/**Banner */}
      <div className="relative flex h-[150px] items-center justify-center bg-[#3753AC]">
        <Image
          alt=""
          width={1280}
          height={150}
          className="absolute hidden h-[140px] w-full max-w-[1130px] object-contain md:block"
          src="/images/banner-coupon.webp"
        />
        <div className="content mx-auto my-auto flex h-[50px] flex-col items-center justify-center">
          <div className="pb-2 text-sm font-bold tracking-widest text-white">
            Up to 70% Off
          </div>
          <div className="text-2xl font-extrabold text-white sm:pb-5 md:text-4xl">
            4th of July Deals
          </div>
        </div>
      </div>
      {/** Navbar */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-lg">
        <div className="hide-scrollbar px-auto mx-auto flex max-w-screen justify-center gap-2 overflow-x-auto whitespace-nowrap lg:px-0">
          {NAVBARS.map((nav, index) => (
            <div
              key={index}
              className={`${nav.isBold ? 'border-b-1' : ''} mr-4 inline-block cursor-pointer text-gray-800 last:mr-0`}
            >
              <Link
                className={`hover:underline hover:underline-offset-4 ${nav.isBold ? 'font-bold' : ''}`}
                href={nav.link}
              >
                {nav.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 mb-4 text-center text-[12px] leading-5 font-bold">
        When you buy through links on RetailMeNot{' '}
        <span className="underline-offset-2"> we may earn a commission.</span>
      </p>
      {!isMobile && (
        <Image
          width={1280}
          height={20}
          alt="coupon-banner-stack-cash"
          className="mx-auto mt-8 mb-8 bg-[#82F3FB] shadow-md"
          src={'/images/coupon-banner-stack-cash.webp'}
        />
      )}
      {isMobile && (
        <div className="mx-4">
          <Image
            width={1280}
            height={50}
            alt="coupon-banner-stack-cash"
            className="mt-6 mb-8 bg-[#82F3FB] px-8 shadow-lg"
            src={'/images/banner-coupon-mobile.webp'}
          />
        </div>
      )}
    </>
  )
}

export default Header
