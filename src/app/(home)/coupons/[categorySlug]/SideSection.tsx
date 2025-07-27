import { CountCoupons } from '@/types/category.type'
import { StoreData } from '@/types/store.type'
import Link from 'next/link'
import React from 'react'

const SideSection = ({
  title = '',
  countCoupons,
  similarStores,
}: {
  title: string
  countCoupons: CountCoupons
  similarStores: StoreData[]
}) => {
  return (
    <aside className="lg:row-end-infinite col-span-2 col-start-1 row-start-5 lg:col-span-1 lg:row-start-4 lg:mr-16">
      <p className="mt-8 mb-4 text-xs font-bold tracking-wider uppercase">
        About {title} coupons
      </p>
      <div className="prose mb-14 text-base">
        <p>
          Listed above you&apos;ll find some of the best {title} coupons,
          discounts and promotion codes as ranked by the users of
          TrustCoupon.com. To use a coupon simply click the coupon code then
          enter the code during the store&apos;s checkout process.
        </p>
      </div>

      <p className="mb-4 text-xs font-bold tracking-wider uppercase">
        Today&apos;s top {title} offers:
      </p>
      <ul className="my-4 ml-4 list-disc text-sm">
        <li>2% Cash Back for Purchases Sitewide</li>
        <li>Macy&apos;s July Coupons, Promo Codes and Deals</li>
      </ul>

      <div className="my-4 mb-14 grid flex-auto grid-cols-2 text-sm">
        <p className="col-start-1">Total Offers</p>
        <p className="col-start-2 justify-self-end">
          {countCoupons.total_coupons}
        </p>
        <p className="col-start-1">Coupon Codes</p>
        <p className="col-start-2 justify-self-end">
          {countCoupons.total_coupon_codes}
        </p>
        <p className="col-start-1">In-Store Coupons</p>
        <p className="col-start-2 justify-self-end">
          {countCoupons.total_in_store_coupons}
        </p>
        <p className="col-start-1 whitespace-nowrap">Sale Coupons</p>
        <p className="col-start-2 justify-self-end">
          {countCoupons.total_sale_coupons}
        </p>
      </div>

      <p className="mb-4 text-xs font-bold tracking-wider uppercase">
        Similar Stores
      </p>
      <ul className="grid grid-cols-2 grid-rows-6 text-sm lg:grid-cols-1">
        {similarStores.map((store) => (
          <li key={store.slug} className="my-1 md:my-0.5">
            <Link href={`/stores/${store.slug}`}>{store.name}</Link>
          </li>
        ))}
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
