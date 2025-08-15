'use client'
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
        <SplideSlide className="py-4 text-center text-sm font-semibold text-gray-800">
          Automatically Apply The Best Codes
        </SplideSlide>
        <SplideSlide className="py-4 text-center text-sm font-semibold text-gray-800 underline">
          Add To Your Browser! It&apos;s Free
        </SplideSlide>
      </SplideTrack>
    </Splide>
  </Suspense>
))

const Navigation = memo(() => {
  const navLinks = useMemo(
    () =>
      NAVBARS.map((nav, index) => (
        <Link
          key={`nav-${index}`}
          href={nav.link}
          className={`inline-block px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 ${
            nav.isBold
              ? 'border-b-2 border-black font-bold text-black'
              : 'text-gray-800'
          }`}
          prefetch={nav.isBold}
        >
          {nav.title}
        </Link>
      )),
    [],
  )
  return (
    <nav className="hide-scrollbar px-auto sticky top-0 z-10 mx-auto flex max-w-screen justify-center gap-2 overflow-x-auto bg-white whitespace-nowrap lg:px-0">
      {navLinks}
    </nav>
  )
})

const StackCashBanner = memo(() => (
  <div className="relative mt-8 mb-8 w-full">
    <Image
      src="/images/banner-coupon-mobile.avif"
      alt="Stack Cash promotional offer"
      width={320}
      height={50}
      className="mx-3 size-full bg-[#82F3FB] object-cover p-6 shadow-md md:hidden"
      priority
      quality={75}
    />
    <Image
      src="/images/coupon-banner-stack-cash.webp"
      alt="Stack Cash promotional offer"
      width={1280}
      height={50}
      className="mx-auto hidden bg-[#82F3FB] object-cover shadow-md md:block"
      quality={75}
      loading="lazy"
    />
  </div>
))

function Header() {
  return (
    <>
      <AnnouncementSlides />
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
          loading="eager"
          fetchPriority="high"
        />
        <div className="flex h-13 flex-col items-center justify-center">
          <h1 className="pb-2 text-sm font-bold tracking-widest text-white">
            Up to 70% Off
          </h1>
          <h2 className="text-2xl font-extrabold text-white sm:pb-5 md:text-4xl">
            4th of July Deals
          </h2>
        </div>
      </div>
      <Navigation />
      <p className="mt-4 mb-4 text-center text-[12px] leading-5 font-bold">
        When you buy through links on TrustCoupon{' '}
        <span className="underline"> we may earn a commission.</span>
      </p>
      <StackCashBanner />
    </>
  )
}

export default Header
