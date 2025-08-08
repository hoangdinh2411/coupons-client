import CouponList from './CouponList'
import Header from './Header'
import ShoppingEvents from './ShoppingEvents'
import StoreCircleList from './StoreCircleList'
import TitleCoupon from './TitleCoupon'
import TopDealList from './TopDealList'
import Head from 'next/head'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { CouponType } from '@/types/enum'

const COUPON_CARD = Array.from({ length: 5 }, (_, i) => ({
  id: `coupon-${i + 1}`,
  title: `CASPER`,
  description: 'July 4th Sale! Up to 70%',
  imgUrl: i % 2 ? `/images/brandCard.webp` : `/images/brandCard2.webp`,
  badgeIcon: i % 2 ? '/images/fire.svg' : '/images/cashback-bolt.svg',
  badgeTitle: '15% Off',
}))

const STORE_LIST = Array.from({ length: 8 }, (_, i) => ({
  title: 'Cash Back',
  value: i + 2,
  link: '/',
  imgUrl: '/images/brandCard2.webp',
  icon: '/images/cashback-bolt.svg',
}))

const TOP_DEALS_TODAY = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `CASPER Deal ${i + 1}`,
  code: '',
  offer_detail: 'July 4th Sale! Up to 70%',
  offer_link: 'https://example.com',
  store_id: 1,
  is_exclusive: false,
  expire_date: '2025-12-31',
  start_date: '2025-01-01',
  type: CouponType.SALE,
  rating: 4.5,
  discount: 15 + i * 5,
  added_by: 1,
  total_interested_users: 100 + i,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  deleted_at: '',
  store: {
    id: 1,
    name: i === 0 ? 'Amazon' : 'CASPER',
    description: 'Great deals and discounts',
    max_discount_pct: 70,
    keywords: ['deals', 'discounts'],
    url: 'https://example.com',
    slug: 'amazon',
    image: {
      file_name: 'store-image.webp',
      url: i % 2 ? `/images/brandCard.webp` : `/images/brandCard2.webp`,
      public_id: 'store-image',
    },
    rating: 4.5,
    coupons: [],
    faqs: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    deleted_at: '',
  },
}))
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
          href="/images/banner-coupon-mobile.webp"
          imageSrcSet="/images/banner-coupon-mobile.webp 1x"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/coupon-banner-stack-cash.webp"
          imageSrcSet="/images/coupon-banner-stack-cash.webp 1x"
          media="(min-width: 768px)"
        />
      </Head>
      <div className="relative bg-white">
        {/** Title */}
        <Header />
        <div className="mx-auto w-full max-w-(--max-width) px-4 2xl:px-0">
          <div className="">
            <TitleCoupon
              title="Best 4th of July Sales &amp; Deals 2025"
              link="/"
            />
            <CouponList coupons={COUPON_CARD} />
          </div>
          <div className="mb-12 pt-12 md:pt-16">
            <StoreCircleList stores={STORE_LIST} />
          </div>
          <div className="mb-12">
            <TopDealList top_deals_today={TOP_DEALS_TODAY} />
          </div>
          {/* <RealDeal /> */}
          <div className="">
            <TitleCoupon
              title="Best Clothing, Shoes & Accessories Deals"
              link="/"
              viewAllText="All Clothing, Shoes & Accessories Deals"
            />
            <CouponList coupons={COUPON_CARD} />
          </div>
          <div className="">
            <TitleCoupon
              title="Best Beauty & Health Deals"
              link="/"
              viewAllText="All Beauty & Health Deals"
            />
            <CouponList coupons={COUPON_CARD} />
          </div>
          <div className="">
            <TitleCoupon
              title="Best Home & Garden Deals"
              viewAllText="All Home & Garden Deals"
              link="/"
            />
            <CouponList coupons={COUPON_CARD} />
          </div>
          <ShoppingEvents />
        </div>
      </div>
    </>
  )
}
