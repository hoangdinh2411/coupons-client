import '@glidejs/glide/dist/css/glide.core.min.css'
import React, { useEffect, useRef, useState } from 'react'
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

const BREAKPOINT = 768
function Header() {
  const glideRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= BREAKPOINT)
    }

    checkMobile() // Gọi lần đầu
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [BREAKPOINT])

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
          className="glide  lg:py-2 flex justify-center items-center m-auto max-w-[1280px] "
          ref={glideRef}
        >
          <div
            className="glide__arrows flex  justify-between items-center w-full h-full  absolute"
            data-glide-el="controls"
          >
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <GrFormPrevious
                className="text-gray-700 cursor-pointer"
                size={22}
              />
            </button>
            <button
              className="glide__arrow glide__arrow--right "
              data-glide-dir=">"
            >
              <GrFormNext className="text-gray-700 cursor-pointer" size={22} />
            </button>
          </div>
          <div
            data-glide-el="track"
            className="glide__track  mx-auto max-w-3xl text-center"
          >
            <ul className="glide__slides">
              <li className="glide__slide  my-auto" data-glide-dir="=0">
                <div className="justify-center gap-2 flex">
                  <div className="uppercase font-bold text-sm py-[2px] text-purple-800 rounded-md bg-purple-100 px-2">
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
                className="glide__slide font-bold my-auto"
                data-glide-dir="=1"
              >
                Automatically apply the best codes and cash back
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/**Banner */}
      <div className="bg-[#3753AC] flex relative h-[170px] justify-center items-center">
        <Image
          alt=""
          width={1280}
          height={200}
          className="w-full max-w-[1130px] hidden md:block absolute"
          src="/images/banner-coupon.webp"
        />
        <div className="content mx-auto my-auto flex-col  h-[50px] flex justify-center items-center">
          <div className="pb-2 text-white text-sm font-bold tracking-widest">
            Up to 70% Off
          </div>
          <div className="text-white text-2xl font-extrabold sm:pb-5 md:text-4xl">
            4th of July Deals
          </div>
        </div>
      </div>
      {/** Navbar */}
      <div className="sticky top-0 z-40 py-4 bg-white shadow-md">
        <div
          className="overflow-x-auto 
                    whitespace-nowrap 
                    px-4 
                    lg:px-0 
                    max-w-[1280px] 
                    mx-auto
                    [scrollbar-width:none] 
                    [-ms-overflow-style:none]"
        >
          {NAVBARS.map((nav, index) => (
            <div
              key={index}
              className={`${nav.isBold ? 'border-b-1' : ''} inline-block mr-4 last:mr-0 text-gray-800 cursor-pointer`}
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

      <p className="mt-4 mb-4 text-[12px] font-bold leading-5  md:font-semibold text-center">
        When you buy through links on RetailMeNot we may earn a commission.
      </p>
      {!isMobile && (
        <Image
          width={1280}
          height={50}
          alt="coupon-banner-stack-cash"
          className="bg-[#82F3FB] mx-auto mt-10 mb-8 shadow-md"
          src={'/images/coupon-banner-stack-cash.webp'}
        />
      )}
      {isMobile && (
        <div className="mx-4">
          <Image
            width={1280}
            height={50}
            alt="coupon-banner-stack-cash"
            className="bg-[#82F3FB] px-8  mt-6 mb-8 shadow-lg"
            src={'/images/banner-coupon-mobile.webp'}
          />
        </div>
      )}
    </>
  )
}

export default Header
