'use client'
import React from 'react'
import TopSplide from '../../stores/[slug]/TopSplide'
import CouponsHeader from './CouponHeader'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const CouponsByCategoryPage = () => {
  return (
    <>
      <div className="-my-10">
        <TopSplide />
      </div>
      <CouponsHeader />

      <div className="container mx-auto grid max-w-screen-xl grid-cols-[theme(spacing.24)_auto] lg:mt-4 lg:grid-cols-[theme(spacing.80)_auto] lg:pt-40">
        {/* Sidebar */}
        <aside className="lg:row-end-infinite col-span-2 col-start-1 row-start-5 lg:col-span-1 lg:row-start-4 lg:mr-16">
          <p className="mt-8 mb-4 text-xs font-bold tracking-wider uppercase">
            About Baby coupons
          </p>
          <div className="prose mb-14 text-base">
            <p>
              Listed above you&apos;ll find some of the best Baby coupons,
              discounts and promotion codes as ranked by the users of
              TrustCoupon.com. To use a coupon simply click the coupon code then
              enter the code during the store&apos;s checkout process.
            </p>
          </div>

          <p className="mb-4 text-xs font-bold tracking-wider uppercase">
            Today&apos;s top Baby offers:
          </p>
          <ul className="my-4 ml-4 list-disc text-sm">
            <li>2% Cash Back for Purchases Sitewide</li>
            <li>Macy&apos;s July Coupons, Promo Codes and Deals</li>
          </ul>

          <div className="my-4 mb-14 grid flex-auto grid-cols-2 text-sm">
            <p className="col-start-1">Total Offers</p>
            <p className="col-start-2 justify-self-end">940</p>
            <p className="col-start-1">Coupon Codes</p>
            <p className="col-start-2 justify-self-end">406</p>
            <p className="col-start-1">In-Store Coupons</p>
            <p className="col-start-2 justify-self-end">9</p>
            <p className="col-start-1 whitespace-nowrap">Free Shipping Deals</p>
            <p className="col-start-2 justify-self-end">107</p>
          </div>

          <p className="mb-4 text-xs font-bold tracking-wider uppercase">
            Similar Stores
          </p>
          <ul className="grid grid-cols-2 grid-rows-6 text-sm lg:grid-cols-1">
            <li className="my-1 md:my-0.5">
              <a href="/stores/amazon.com">Amazon</a>
            </li>
          </ul>

          <Link
            className="mt-2 mb-14 block text-xs font-bold tracking-wider uppercase underline decoration-gray-400"
            href="/brands"
          >
            All Stores
          </Link>
        </aside>

        {/* Main Content */}
        <main className="col-span-2 col-start-1 row-start-4 mt-2 mb-6 overflow-hidden lg:col-span-1 lg:col-start-2 lg:row-span-5 lg:row-start-3">
          <section className="relative mb-6 flex gap-x-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gray-200 bg-black p-2">
              <Image
                src="/images/amazon-logo.webp"
                alt="Amazon"
                className="aspect-square h-auto w-full object-contain p-2"
                fill
              />
            </div>

            <div>
              <p className="xs:text-2xl text-xl font-bold">
                Today&apos;s Top Deals
              </p>
              <p className="text-xs font-semibold tracking-wider uppercase">
                Presented by Amazon
              </p>
              <a
                className="mt-3 flex items-center text-xs font-bold tracking-wider uppercase underline underline-offset-2"
                rel="nofollow sponsored"
              >
                1% Cash Back on Amazon Devices
                <FaArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>

            <a className="absolute right-0.5 bottom-3 hidden h-11 items-center rounded-full border border-black bg-white px-4 py-1.5 text-xs font-bold whitespace-nowrap text-black lg:flex">
              View more deals
            </a>
          </section>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[...Array(24)].map((_, index) => (
              <a
                key={index}
                className="relative mb-5 flex h-full cursor-pointer overflow-hidden border-[#E0E0E0] bg-transparent md:h-auto md:min-h-[278px] md:flex-col md:rounded-xl md:border lg:h-32 lg:flex-col lg:bg-white"
              >
                <Image
                  src="/images/happiest-baby-logo.webp"
                  alt="Target 2% Cash Back for Purchases Sitewide"
                  className="relative flex aspect-video max-h-full max-w-36 shrink-0 flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white object-contain px-4 capitalize md:max-w-full md:rounded-none md:border-0 md:px-8"
                  loading="lazy"
                  width="320"
                  height="130"
                />

                <div className="relative flex h-full flex-col justify-between px-2 py-0 md:py-2">
                  <div>
                    <h3 className="text-xs font-bold tracking-wide uppercase md:mt-2">
                      Target
                    </h3>
                    <p className="my-2 line-clamp-2 text-base leading-5 capitalize md:mb-auto md:line-clamp-3">
                      2% Cash Back for Purchases Sitewide
                    </p>
                  </div>
                  <p className="mt-2 self-start rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold lg:mb-1">
                    Cash Back
                  </p>
                </div>

                <p className="absolute top-2 left-2 flex rounded border border-solid border-[#E0E0E0] bg-white px-2 py-[3px] text-xs font-bold">
                  +2% Back
                </p>
              </a>
            ))}
          </div>

          <div className="col-start-2 row-start-8 mb-24 flex items-center justify-center">
            {/* Conditionally render the button using React logic */}
            {true && (
              <button
                className="mt-4 w-48 cursor-pointer items-center justify-center rounded-full bg-purple-700 py-3 tracking-wider lg:flex"
                onClick={() => {
                  // Handle the click event to show more offers
                  console.log('Show more offers clicked')
                }}
              >
                <span className="w-auto text-sm text-white">
                  Show More Offers
                </span>
              </button>
            )}
          </div>
        </main>

        <footer className="col-span-2 row-start-1 mb-4 hidden text-center text-[10px] lg:col-span-1 lg:row-start-3 lg:mx-0 lg:mt-3 lg:mr-16 lg:mb-8 lg:block lg:text-left lg:text-sm">
          When you buy through links on TrustCoupon{' '}
          <a className="block underline md:inline">we may earn a commission.</a>
        </footer>
      </div>
    </>
  )
}

export default CouponsByCategoryPage
