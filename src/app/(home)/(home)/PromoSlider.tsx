'use client'

import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Link from 'next/link'

interface PromoSliderProps {
  banner_id: string
  banner_title: string
  banner_image: string[]
  banner_link: string
  banner_description: string
}

export default function PromoSlider({
  bannerList,
}: {
  bannerList: PromoSliderProps[]
}) {
  return (
    <div className="my-4 w-full">
      <Splide
        className="custom-splide"
        options={{
          type: 'loop',
          perPage: 1,
          perMove: 1,
          pagination: true,
          autoplay: true,
          interval: 2000,
          pauseOnHover: true,
          pauseOnFocus: true,
          arrows: true,
          focus: 'center',
          classes: {
            arrow: 'splide__arrow',
            prev: 'splide__arrow--prev !left-0 lg:!left-[6%] 2xl:!left-[16%] !size-10',
            next: 'splide__arrow--next !right-0 lg:!right-[6%] 2xl:!right-[16%] !size-10',
          },
        }}
        aria-label="Promo Slider"
      >
        {bannerList.map((banner) => (
          <SplideSlide
            key={banner.banner_id}
            className="group mx-auto w-full px-4 pb-4 lg:max-w-[1024px] xl:max-w-[1280px]"
          >
            <div className="relative h-[400px] overflow-hidden rounded-2xl md:h-[360px] md:rounded-4xl">
              <div className="flex h-full w-full justify-between">
                <div className="relative hidden aspect-[11/12] w-[330px] md:block">
                  <Image
                    src={banner.banner_image[0]}
                    alt={banner.banner_title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 768px) 330px"
                  />
                </div>

                <div className="relative aspect-[11/10] w-full max-w-[660px] md:w-2/3">
                  <Image
                    src={banner.banner_image[1]}
                    alt={banner.banner_title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 768px) 660px, 100vw"
                  />
                </div>
              </div>
              <div className="absolute right-0 bottom-0 left-0 z-10 flex w-full flex-col bg-gradient-to-t from-gray-900 px-6 py-2.5 font-bold text-white md:left-[25%] md:h-[360px] md:w-72 md:bg-black md:bg-none">
                <h2 className="mt-auto mb-3 text-xl leading-tight font-medium tracking-wide uppercase md:mb-5 md:tracking-widest">
                  {banner.banner_title}
                </h2>
                <p className="tracking-none mb-3 text-lg font-semibold md:text-xl md:font-normal md:tracking-normal">
                  {banner.banner_description}
                </p>
                <Link
                  href={banner.banner_link}
                  className="mt-4 mb-auto hidden text-xs tracking-widest uppercase underline underline-offset-4 md:block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
