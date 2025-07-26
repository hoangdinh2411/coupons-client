'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import TopDealsSplide from './TopDealsSplide'
import Badge from '@/components/badge'

const ListCoupons = () => {
  return (
    <main className="col-span-2 col-start-1 row-start-4 mt-2 mb-6 overflow-hidden lg:col-span-1 lg:col-start-2 lg:row-span-5 lg:row-start-3">
      <section className="relative mb-6 flex gap-x-4">
        <div className="relative min-h-24 min-w-24 overflow-hidden rounded-full border border-gray-200 bg-black p-2">
          <Link href={'/coupons/amazon'}>
            <Image
              src="/images/amazon-logo.webp"
              alt="Amazon"
              className="aspect-square h-auto w-full object-contain p-2"
              fill
            />
          </Link>
        </div>

        <div>
          <p className="xs:text-2xl text-xl font-bold">
            Today&apos;s Top Deals
          </p>
          <p className="text-xs font-semibold tracking-wider uppercase">
            Presented by Amazon
          </p>
          <Link
            href={`/coupons/amazon`}
            className="mt-3 flex items-center text-xs font-bold tracking-wider uppercase underline underline-offset-2"
            rel="nofollow sponsored"
          >
            <div className="relative h-5 w-5">
              <Image
                src={'/images/cashback-bolt.svg'}
                alt="Cashback Bolt"
                fill
              />
            </div>
            1% Cash Back on Amazon Devices
            <FaArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <Link
          href={'/coupons'}
          className="absolute right-0.5 bottom-3 hidden h-11 items-center rounded-full border border-black bg-white px-4 py-1.5 text-xs font-bold whitespace-nowrap text-black lg:flex"
        >
          View more deals
        </Link>
      </section>

      <TopDealsSplide />

      <div className="my-14 flex w-full items-center justify-center">
        <Link
          href={'/coupons'}
          className="flex h-11 w-fit items-center justify-center rounded-full border border-black bg-white px-4 py-1.5 text-xs font-bold whitespace-nowrap text-black lg:hidden"
        >
          View more deals
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3">
        {[...Array(24)].map((_, index) => (
          <Link
            href={`/coupons/amazon/${index}`}
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

            <Badge
              className="absolute top-2 left-2 !text-sm"
              imageIcon="/images/cashback-bolt.svg"
              text="+2% Back"
            />
          </Link>
        ))}
      </div>

      <div className="col-start-2 row-start-8 mb-24 flex items-center justify-center">
        {true && (
          <button
            className="mt-4 w-48 cursor-pointer items-center justify-center rounded-full bg-purple-700 py-3 tracking-wider lg:flex"
            onClick={() => {
              console.log('Show more offers clicked')
            }}
          >
            <span className="w-auto text-sm text-white">Show More Offers</span>
          </button>
        )}
      </div>
    </main>
  )
}

export default ListCoupons
