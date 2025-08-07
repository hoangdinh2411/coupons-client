'use client'
import '@glidejs/glide/dist/css/glide.core.min.css'
import React, { memo, Suspense, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { BLUR_PLACEHOLDER_HERO, NAVBARS } from '@/constant/hot-deals'

const Splide = dynamic(
  () => import('@splidejs/react-splide').then((mod) => mod.Splide),
  {
    loading: () => <div className="h-12 animate-pulse bg-gray-50" />,
    ssr: false,
  },
)
const SplideSlide = dynamic(() =>
  import('@splidejs/react-splide').then((mod) => mod.SplideSlide),
)
const SplideTrack = dynamic(() =>
  import('@splidejs/react-splide').then((mod) => mod.SplideTrack),
)

const AnnouncementSlides = memo(() => (
  <Suspense fallback={<div className="h-12 animate-pulse bg-gray-50" />}>
    <Splide
      className="mx-auto max-w-(--max-width)"
      options={{
        type: 'loop',
        autoWidth: false,
        pagination: false,
        autoplay: true,
        perPage: 1,
        interval: 3000,
        speed: 800,
        pauseOnHover: true,
        classes: {
          arrow: 'splide__arrow !bg-transparent !size-3',
        },
      }}
      hasTrack={false}
      aria-label="Promotional announcements"
    >
      <SplideTrack>
        <SplideSlide>
          <div className="py-4 text-center text-sm font-semibold text-gray-800">
            Automatically Apply The Best Codes And Cash Back Offers To Your Cart
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="py-4 text-center text-sm font-semibold text-gray-800">
            <span className="underline">
              Add To Your Browser! It&apos;s Free
            </span>
          </div>
        </SplideSlide>
      </SplideTrack>
    </Splide>
  </Suspense>
))
const Navigation = memo(() => {
  const navItems = useMemo(
    () =>
      NAVBARS.map((nav, index) => (
        <li
          key={`${nav.title}-${index}`}
          className={`${nav.isBold ? 'border-b-2 border-blue-600' : ''} inline-block`}
        >
          <Link
            className={`rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-100 hover:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${nav.isBold ? 'font-bold text-blue-600' : 'text-gray-800'} `}
            href={nav.link}
            prefetch={nav.isBold}
          >
            {nav.title}
          </Link>
        </li>
      )),
    [],
  )
  return (
    <nav className="sticky top-0 z-10 bg-white p-4 shadow-lg" role="navigation">
      <ul className="hide-scrollbar px-auto mx-auto flex max-w-screen justify-center gap-2 overflow-x-auto whitespace-nowrap lg:px-0">
        {navItems}
      </ul>
    </nav>
  )
})

function Header() {
  return (
    <>
      {/** Gslide */}
      <AnnouncementSlides />
      {/**Banner */}
      <div className="relative flex h-[150px] items-center justify-center bg-[#3753AC]">
        <Image
          alt="4th of July promotional banner"
          width={1280}
          height={150}
          className="absolute hidden h-[140px] w-full max-w-[1130px] object-contain md:block"
          src="/images/banner-coupon.webp"
          priority
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER_HERO}
          sizes="(min-width: 768px) 1130px, 0px"
          quality={90}
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
          <Navigation />
        </div>
      </div>

      <p className="mt-4 mb-4 text-center text-[12px] leading-5 font-bold">
        When you buy through links on RetailMeNot{' '}
        <span className="underline-offset-2"> we may earn a commission.</span>
      </p>
      <div className="relative h-[200px] w-full">
        <Image
          src="/images/banner-coupon-mobile.webp"
          alt="Stack Cash promotional offer"
          width={1280}
          height={50}
          className="mx-auto mt-8 mb-8 bg-[#82F3FB] object-cover shadow-md md:hidden"
          priority
        />
        <Image
          src="/images/coupon-banner-stack-cash.webp"
          alt="Stack Cash promotional offer"
          width={1280}
          height={50}
          className="mx-auto mt-8 mb-8 hidden bg-[#82F3FB] object-cover shadow-md md:block"
          priority
        />
      </div>
    </>
  )
}

export default Header
