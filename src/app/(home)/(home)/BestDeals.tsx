'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
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
interface BestDealsProps {
  bestDeals: {
    deal_id: string
    deal_title: string
    deal_image: string
    deal_link: string
  }[]
}

export default function BestDeals({ bestDeals }: BestDealsProps) {
  const splideOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    autoplay: true,
    interval: 3000,
    arrows: false,
    pagination: false,
    drag: true,
    flickMaxPages: 1,
    breakpoints: {
      768: {
        perPage: 1,
        perMove: 1,
      },
      1024: {
        perPage: 2,
        perMove: 2,
      },
      1280: {
        perPage: 3,
        perMove: 3,
      },
    },
  }

  return (
    <div className="pb-8 font-bold">
      {/* Mobile slider - visible only on mobile */}
      <div className="block lg:hidden">
        <div className="scrollbar-hide">
          <Splide options={splideOptions}>
            {bestDeals.map((deal) => (
              <SplideSlide className="h-full" key={deal.deal_id}>
                <div className="mb-4 px-1">
                  <Link
                    href={deal.deal_link}
                    className="flex h-[170px] w-full justify-between overflow-hidden rounded-xl bg-white text-black shadow-lg transition-shadow duration-300 ease-out hover:shadow-xl"
                  >
                    <div className="flex flex-1 flex-col justify-center pr-4 pl-5">
                      <p className="mb-2 text-sm leading-tight font-semibold">
                        {deal.deal_title}
                      </p>
                      <p className="text-xs tracking-widest uppercase underline underline-offset-4">
                        Shop Now
                      </p>
                    </div>
                    <div className="relative h-full w-[160px] flex-shrink-0">
                      <Image
                        src={deal.deal_image}
                        alt={`${deal.deal_title} - promotional deal image`}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="160px"
                      />
                    </div>
                  </Link>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* Desktop grid - visible only on desktop */}
      <div className="hidden lg:block">
        <div className="scrollbar-hide flex items-center gap-4 overflow-x-auto px-4">
          {bestDeals.map((deal) => (
            <Link
              href={deal.deal_link}
              className="flex h-[170px] w-full min-w-80 justify-between overflow-hidden rounded-xl bg-white text-black shadow-lg transition-shadow duration-300 ease-out hover:shadow-xl lg:w-1/3 lg:min-w-0"
              key={deal.deal_id}
            >
              <div className="flex flex-1 flex-col pr-4 pl-5">
                <p className="my-4 text-sm leading-tight font-semibold">
                  {deal.deal_title}
                </p>
                <p className="text-xs tracking-widest uppercase underline underline-offset-4">
                  Shop Now
                </p>
              </div>
              <div className="relative aspect-[16/17] h-full w-[160px] flex-shrink-0">
                <Image
                  src={deal.deal_image}
                  alt={`${deal.deal_title} - promotional deal image`}
                  fill
                  className="object-cover"
                  sizes="160px"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
