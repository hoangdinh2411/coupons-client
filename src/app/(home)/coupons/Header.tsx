import '@glidejs/glide/dist/css/glide.core.min.css'
import React, { useEffect, useRef } from 'react'
import Glide from '@glidejs/glide'
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'
import Image from 'next/image'
import Link from 'next/link'

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

function Header({ isMobile }: { isMobile: boolean }) {
  const glideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let glide: Glide | null = null
    if (glideRef.current) {
      glide = new Glide(glideRef.current, {
        type: 'carousel',
        perView: 1,
      })
      glide.mount()
    }
    return () => {
      if (glide) {
        glide.destroy()
      }
    }
  }, [])
  return (
    <>
      {/** Gslide */}
      <div className="bg-slate-100">
        <div
          className="glide m-auto flex max-w-[1280px] items-center justify-center lg:py-2"
          ref={glideRef}
        >
          <div
            className="glide__arrows absolute flex h-full w-full items-center justify-between"
            data-glide-el="controls"
          >
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <GrFormPrevious
                className="cursor-pointer text-gray-700"
                size={22}
              />
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <GrFormNext className="cursor-pointer text-gray-700" size={22} />
            </button>
          </div>
          <div
            data-glide-el="track"
            className="glide__track mx-auto max-w-3xl text-center"
          >
            <ul className="glide__slides">
              <li className="glide__slide my-auto" data-glide-dir="=0">
                <div className="flex justify-center gap-2">
                  <div className="rounded-md bg-purple-100 px-2 py-[2px] text-sm font-bold text-purple-800 uppercase">
                    NEW
                  </div>
                  <a
                    href="/"
                    className="mr-1 font-extrabold underline lg:font-bold"
                    draggable="true"
                  >
                    Personalized Offers
                  </a>
                  Just For You
                </div>
              </li>
              <li
                className="glide__slide my-auto font-bold"
                data-glide-dir="=1"
              >
                Automatically apply the best codes and cash back
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/**Banner */}
      <div className="relative flex h-[170px] items-center justify-center bg-[#3753AC]">
        <Image
          alt=""
          width={1280}
          height={200}
          className="absolute hidden w-full max-w-[1130px] md:block"
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
      <div className="sticky top-0 z-40 bg-white py-4 shadow-md">
        <div className="mx-auto max-w-[1280px] overflow-x-auto px-4 whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] lg:px-0">
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

      <p className="mt-4 mb-4 text-center text-[12px] leading-5 font-bold md:font-semibold">
        When you buy through links on RetailMeNot we may earn a commission.
      </p>
      {!isMobile && (
        <Image
          width={1280}
          height={50}
          alt="coupon-banner-stack-cash"
          className="mx-auto mt-10 mb-8 bg-[#82F3FB] shadow-md"
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
