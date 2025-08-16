/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { COUPON_CARD, STORE_LIST, TOP_DEALS_TODAY } from '@/constant/hot-deals'
import Header from './Header'
import TitleCoupon from './TitleCoupon'

const CouponList = dynamic(() => import('./CouponList'), {
  loading: () => <div className="h-32 animate-pulse rounded bg-gray-50" />,
  ssr: true,
})

const StoreCircleList = dynamic(() => import('./StoreCircleList'), {
  loading: () => <div className="h-24 animate-pulse rounded bg-gray-50" />,
  ssr: true,
})

const TopDealList = dynamic(() => import('./TopDealList'), {
  loading: () => <div className="h-40 animate-pulse rounded bg-gray-50" />,
  ssr: true,
})

const ShoppingEvents = dynamic(() => import('./ShoppingEvents'), {
  loading: () => <div className="h-48 animate-pulse rounded bg-gray-50" />,
})
const CouponSection = memo(({ title, viewAllText, link, coupons }: any) => (
  <>
    <TitleCoupon title={title} link={link} viewAllText={viewAllText} />
    <Suspense
      fallback={<div className="h-32 animate-pulse rounded bg-gray-50" />}
    >
      <CouponList coupons={coupons} />
    </Suspense>
  </>
))

export default function CouponsPage() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${METADATA.APP_URL}${APP_ROUTERS.HOT_DEALS}`}
        />
        <link
          rel="preload"
          as="image"
          href="/images/banner-coupon-mobile.avif"
          media="(max-width: 767px)"
          type="image/avif"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/images/coupon-banner-stack-cash.webp"
          media="(min-width: 768px)"
          type="image/webp"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="relative bg-white">
        <Header />
        <div className="mx-auto w-full max-w-(--max-width) px-4 2xl:px-0">
          <CouponSection
            title="Best 4th of July Sales &amp; Deals 2025"
            link="/"
            coupons={COUPON_CARD}
          />
          <Suspense
            fallback={<div className="h-24 animate-pulse rounded bg-gray-50" />}
          >
            <StoreCircleList stores={STORE_LIST} />
          </Suspense>
          <Suspense
            fallback={<div className="h-40 animate-pulse rounded bg-gray-50" />}
          >
            <TopDealList top_deals_today={TOP_DEALS_TODAY} />
          </Suspense>

          <CouponSection
            title="Best Clothing, Shoes & Accessories Deals"
            link="/"
            viewAllText="All Clothing, Shoes & Accessories Deals"
            coupons={COUPON_CARD}
          />

          <CouponSection
            title="Best Beauty & Health Deals"
            link="/"
            viewAllText="All Beauty & Health Deals"
            coupons={COUPON_CARD}
          />

          <CouponSection
            title="Best Home & Garden Deals"
            viewAllText="All Home & Garden Deals"
            link="/"
            coupons={COUPON_CARD}
          />

          <Suspense
            fallback={<div className="h-48 animate-pulse rounded bg-gray-50" />}
          >
            <ShoppingEvents />
          </Suspense>
        </div>
      </div>
    </>
  )
}
