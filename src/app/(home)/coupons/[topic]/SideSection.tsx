import Link from 'next/link'
import React from 'react'

const SideSection = () => {
  return (
    <aside className="lg:row-end-infinite col-span-2 col-start-1 row-start-5 lg:col-span-1 lg:row-start-4 lg:mr-16">
      <p className="mt-8 mb-4 text-xs font-bold tracking-wider uppercase">
        About Baby coupons
      </p>
      <div className="prose mb-14 text-base">
        <p>
          Listed above you&apos;ll find some of the best Baby coupons, discounts
          and promotion codes as ranked by the users of TrustCoupon.com. To use
          a coupon simply click the coupon code then enter the code during the
          store&apos;s checkout process.
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
  )
}

export default SideSection
