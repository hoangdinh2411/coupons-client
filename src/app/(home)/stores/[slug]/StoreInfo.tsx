'use client'
import { APP_ROUTERS } from '@/helpers/config'
import UseAppStore from '@/stores/app.store'
import { StoreData } from '@/types/store.type'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

function StoreInfo({
  store,
  similar_store,
}: {
  store: StoreData
  similar_store: StoreData[]
}) {
  const menu = UseAppStore((state) => state.menu)
  const totalRating = Array.from({ length: 5 }, (_, i) => i + 1)

  const [randomCouponIndex, setRandomCouponIndex] = useState(0)

  useEffect(() => {
    if (store.coupons.length > 0) {
      setRandomCouponIndex(Math.floor(Math.random() * store.coupons.length))
    }
  }, [store.coupons.length])
  return (
    <div>
      <div className="relative xl:mt-28 xl:pr-26">
        <div className="mt-20 mb-12 hidden text-sm font-bold lg:block">
          When you buy through links on
          <p>
            TrustCoupon.Com{' '}
            <span className="underline">we may earn a commission.</span>
          </p>
        </div>
        <div className="w-full rounded-lg lg:mx-auto lg:max-w-md">
          <h3 className="mb-4 text-sm font-bold uppercase">
            TODAY&apos;S TOP {store.name} OFFERS:
          </h3>
          <ul className="mb-4 list-inside list-disc">
            {store.coupons.length > 0 && (
              <li className="text-md text-gray-900">
                {store.coupons[randomCouponIndex].discount}% Off Your Order
              </li>
            )}
          </ul>
          <div className="mb-4">
            <p className="mr-2 flex justify-between">
              <span className=""> Total Offers:</span>
              <span className="ml-auto">{store.total_coupons ?? 0}</span>
            </p>
            <p className="mr-2 flex justify-between">
              <span className="">Coupon Codes:</span>
              <span className="ml-auto">{store.total_coupon_codes ?? 0}</span>
            </p>
            <p className="mr-2 flex justify-between">
              <span className=""> In-Store Coupons:</span>
              <span className="ml-auto">
                {store.total_in_store_coupons ?? 0}
              </span>
            </p>
            <p className="mr-2 flex justify-between">
              <span className=""> Sale Coupons:</span>
              <span className="ml-auto">{store.total_sale_coupons ?? 0}</span>
            </p>
          </div>

          <h3 className="mt-6 mb-4 text-xs font-bold tracking-wider uppercase">
            Why trust us?
          </h3>
          <p className="mb-2 font-sans text-sm">
            Here&rsquo;s why you can shop with confidence at {store.name} using
            TrustCoupon:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong>Daily Verification:</strong> Our team tests each code
              every day to ensure it&rsquo;s active.
            </li>
            <li>
              <strong>Clear Terms:</strong> We read the fine print so you know
              exactly how to use the deal.
            </li>
            <li>
              <strong>Community Powered:</strong> We use real-time user ratings
              to feature the best codes first.
            </li>
          </ul>
          <Link
            href={'/how-we-verify'}
            className="mt-3 inline-block text-sm font-semibold text-green-600 hover:underline"
          >
            Learn How We Verify ›
          </Link>
        </div>
        <div className="relative top-0 transition-all duration-700">
          {/* Submit a Coupon */}
          <Link
            href={APP_ROUTERS.SUBMIT_COUPON}
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
          </Link>

          {/* About Section */}
          <h2 className="text-xs font-bold tracking-wider uppercase">
            Rating {store.name}
          </h2>

          <div className="relative my-3">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {totalRating.map((i) => (
                <button
                  key={i}
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
                      (store.rating ?? 0 >= i)
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
            </div>
          </div>
        </div>

        {/**LIST */}
        <div className="rounded-lg lg:mx-auto lg:max-w-md">
          <h3 className="mt-14 mb-4 hidden text-sm font-bold uppercase lg:block">
            SIMILAR STORES
          </h3>
          <ul className="hidden list-inside space-y-2 lg:block">
            {similar_store.map((store) => (
              <li
                key={store.id}
                className="cursor-pointer list-none text-sm font-[600] hover:underline"
              >
                <Link href={'/store/' + store.slug}>{store.name}</Link>
              </li>
            ))}
            <li className="list-none">
              <Link
                href={APP_ROUTERS.ALL_STORES}
                className="cursor-pointer text-sm font-[600] underline"
              >
                View all
              </Link>
            </li>
          </ul>

          <h3 className="mt-14 mb-4 text-sm font-bold uppercase">
            Popular Stores
          </h3>
          <ul className="hidden list-inside space-y-2 lg:block">
            {menu &&
              menu.popular.map((store) => (
                <li
                  key={store.id}
                  className="cursor-pointer list-none text-sm font-[600] hover:underline"
                >
                  <Link href={'/store/' + store.slug}>{store.name}</Link>
                </li>
              ))}
            <li className="list-none">
              <Link
                href={APP_ROUTERS.ALL_STORES}
                className="cursor-pointer list-none text-sm font-[600] underline"
              >
                All stores
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StoreInfo
