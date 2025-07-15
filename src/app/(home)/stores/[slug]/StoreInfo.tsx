'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
const OFFERS = {
  title: 'SIMILAR STORES',
  viewAll: 'VIEW ALL',
  allStores: 'ALL STORES',
  popularTitle: 'POPULAR STORES',
}

const STORES = {
  similar: [
    'Motherhood Maternity',
    'Hatch Collection',
    'Ingrid & Isabel',
    'Kindred Bravely',
    'Kipdip',
    'Cake Maternity',
    'Blanqi',
    'Gap',
    'Old Navy',
    'Show Me Your Mumu',
    'Club L London US',
    'Ministry of Supply',
    "The Children's Place",
    'Stitch Fix',
    'Fab Kids',
    'Sparkle in Pink',
    'Lou Lou & Company',
    'Little Me',
    'Jacadi',
    'H&M',
    'PinkBlush Maternity',
    'Momcozy Nursing Bras',
    'Bravado Designs',
  ],
  popular: ['Amazon', 'Best Buy', 'Chewy.com', 'eBay', 'Hotels.com'],
}
function StoreInfo({ className = '' }: { className: string }) {
  const [rating, setRating] = useState(1)
  const [hovered, setHovered] = useState(0)

  const handleRating = (value: number) => {
    setRating(value)
    // TODO: Send rating to backend
  }
  return (
    <div className={`${className} `}>
      <div className="relative xl:mt-28 xl:mr-24">
        <p className="mt-20 mb-12 hidden text-sm font-bold lg:block">
          When you buy through links on
          <p>
            RetailMeNot{' '}
            <span className="underline">we may earn a commission.</span>
          </p>
        </p>
        <div className="w-full rounded-lg lg:mx-auto lg:max-w-md">
          <h3 className="mb-4 text-sm font-bold uppercase">
            TODAY&apos;S TOP A PEA IN THE POD OFFERS:
          </h3>
          <ul className="mb-4 list-inside list-disc">
            <li className="text-md text-gray-900">15% Off Your Order</li>
            <li className="text-md text-gray-900">40% Off Sitewide</li>
          </ul>
          <div className="mb-4">
            <p className="justify-betwee mr-2 flex">
              <span className=""> Total Offers:</span>
              <span className="ml-auto">18</span>
            </p>
            <p className="justify-betwee mr-2 flex">
              <span className="">Coupon Codes:</span>
              <span className="ml-auto">12</span>
            </p>
            <p className="justify-betwee mr-2 flex">
              <span className=""> In-Store Coupons:</span>
              <span className="ml-auto">0</span>
            </p>
            <p className="justify-betwee mr-2 flex">
              <span className="list-disc"> Free Shipping Deals:</span>
              <span className="ml-auto">0</span>
            </p>
          </div>
          {/* === Updated‑by block === */}
          <section className="my-6 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
            {/* Heading */}
            <p className="mb-2 text-center text-sm font-bold tracking-wide uppercase">
              This page has been updated by
            </p>

            {/* Avatar + name/title */}
            <div className="mb-4 flex items-center gap-x-3.5 pt-3.5 pl-2">
              <Image
                src="/images/female.webp"
                alt="Kelly Rose avatar"
                width={56}
                height={56}
                className="h-14 w-14 rounded-[100%] object-cover"
              />
              <div>
                <h3 className="text-base leading-tight font-bold text-gray-900">
                  Kelly Rose
                </h3>
                <p className="pt-0.5 text-sm font-medium text-gray-700">
                  Content Writer
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="tracking-tight">
              Kelly is a writer and editor for RetailMeNot based in California.
              When she’s not online shopping, you can find her at her gymnastics
              gym, skating at an ice rink, or doing agility with her Border
              Collie, Frankenstein.
            </p>

            {/* “See Bio” link */}
            <Link
              href="/blog/author/kellyrose"
              className="hover:text-green mt-4 inline-block underline underline-offset-2 transition-colors"
            >
              See Bio
            </Link>
          </section>

          <h3 className="mb-4 text-sm font-bold uppercase">
            A PEA IN THE POD FEATURED ARTICLES
          </h3>
          <Image
            alt=""
            width={300}
            height={300}
            className="mb-4 w-full rounded-lg"
            src={'/images/store-detail-info.webp'}
          />
          <div className="px-4">
            <h3 className="mb-4 text-sm font-bold uppercase">
              Cash Back at nearly 3,800 Retailers
            </h3>
            <p className="text-sm font-[600]">
              Members earn guaranteed savings on every purchase. Sign in now to
              stack rewards, promo codes, and offers automatically.
              <p className="mt-2">
                By <span className="underline">RetailMeNot</span>
              </p>
            </p>
          </div>
          <h3 className="mt-6 mb-4 text-xs font-bold tracking-wider uppercase">
            Why trust us?
          </h3>
          <p className="mb-2 font-sans text-sm">
            RetailMeNot.com has a dedicated merchandising team sourcing and
            verifying the best A Pea in the Pod coupons, promo codes and deals —
            so you can save money and time while shopping. Our deal hunters are
            constantly researching the market in real time to provide you with
            up-to-date savings intel, the best stores to shop and which products
            to buy. We also make sure to look at the fine print, so you
            don&apos;t have to worry about whether a promo code will actually
            work on your purchase. Wherever you shop, we want to make sure you
            can trust RetailMeNot to provide vetted coupons, promo codes, sales
            and deals.
          </p>
          <Link href={'/'} className="mt-4 underline">
            Learn How We Verify Coupons
          </Link>
        </div>
        <div className="relative top-0 transition-all duration-700">
          {/* Submit a Coupon */}
          <a
            href="/submit"
            className="text-green my-6 flex items-center border-t-1 border-b-1 border-gray-300 py-6 text-sm font-bold tracking-wider uppercase hover:underline"
          >
            Submit a Coupon
            <svg
              className="ml-2 inline-block h-3 w-3"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15.375 12.875a.625.625 0 1 1 0 1.25h-1.25v1.25a.625.625 0 1 1-1.25 0v-1.25h-1.25a.625.625 0 1 1 0-1.25h1.25v-1.25a.625.625 0 1 1 1.25 0v1.25zM11.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m2.25 3.657a.34.34 0 0 1-.1.24L6.896 13.65a.347.347 0 0 1-.48 0L1.349 8.584a.34.34 0 0 1 0-.481L8.102 1.35a.34.34 0 0 1 .24-.1h5.068a.34.34 0 0 1 .34.34z"></path>
            </svg>
          </a>

          {/* About Section */}
          <h2 className="text-xs font-bold tracking-wider uppercase">
            About ABCya
          </h2>

          <div className="relative my-3 min-h-10">
            {/* Stars */}
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  onClick={() => handleRating(i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(0)}
                  className="relative h-4 w-4 text-slate-100"
                  aria-label={`star rating ${i}`}
                >
                  <svg
                    className="absolute top-0 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z" />
                  </svg>
                  <svg
                    className={`absolute top-0 h-4 w-4 transition-all ${
                      (hovered || rating) >= i
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 576 512"
                  >
                    <path d="m226.5 168.8 61.4-126.5 61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0l-122.6 65.5 23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7m198.4 340.3c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5l-26.3-155.5 111.2-110.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3l-153.3-22.6-68.6-141.3C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5l-68.6 141.3-153.2 22.7c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5l111.1 110.1L116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z" />
                  </svg>
                </button>
              ))}
              <div>
                {' '}
                <span className="ml-1 font-semibold">Rate ABCya Offers</span>
                <Link
                  href={'/'}
                  className="font-proxima ml-1 block font-semibold underline"
                >
                  Log&nbsp;In
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/**LIST */}
        <div className="rounded-lg lg:mx-auto lg:max-w-md">
          <h3 className="mt-14 mb-4 hidden text-sm font-bold uppercase lg:block">
            {OFFERS.title}
          </h3>
          <ul className="hidden list-inside list-disc space-y-2 lg:block">
            {STORES.similar.map((store, index) => (
              <li
                key={index}
                className="cursor-pointer list-none text-sm font-[600] hover:underline"
              >
                {store}
              </li>
            ))}
          </ul>
          <p className="mt-2 hidden cursor-pointer text-sm font-[600] underline lg:block">
            {OFFERS.viewAll}
          </p>
          <h3 className="mt-14 mb-4 text-sm font-bold uppercase">
            {OFFERS.popularTitle}
          </h3>
          <ul className="grid list-inside list-disc grid-cols-2 space-y-1 lg:grid-cols-1">
            {STORES.popular.map((store, index) => (
              <li
                key={index}
                className="cursor-pointer list-none text-sm font-[600] hover:underline"
              >
                {store}
              </li>
            ))}
          </ul>

          <p className="mt-1 mb-4 cursor-pointer text-sm font-[600] underline">
            {OFFERS.allStores}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StoreInfo
