import CouponList from './CouponList'
import Header from './Header'
import ShoppingEvents from './ShoppingEvents'
import StoreCircleList from './StoreCircleList'
import TitleCoupon from './TitleCoupon'
import TopDealList from './TopDealList'

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

const TOP_DEAL_LIST = Array.from({ length: 8 }, (_, i) => ({
  id: `coupon-${i + 1}`,
  title: `CASPER`,
  description: 'July 4th Sale! Up to 70%',
  imgUrl: i % 2 ? `/images/brandCard.webp` : `/images/brandCard2.webp`,
  icon: i % 2 ? '/images/fire.svg' : '/images/cashback-bolt.svg',
  badgeTitle: '15% Off',
}))
const BEST_DEAL = {
  id: `coupon`,
  title: `Today's Top Deals`,
  description: 'Presented by Amazon',
  imgUrl: `/images/brandCard.webp`,
  icon: '/images/cashback-bolt.svg',
  stringValueInfo: '3% Cash Back on Amazon Devices',
}
export default function CouponsPage() {
  return (
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
          <TopDealList bestDeal={BEST_DEAL} topDealList={TOP_DEAL_LIST} />
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
  )
}
