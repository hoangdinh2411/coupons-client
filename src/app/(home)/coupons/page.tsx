'use client'
import CouponList from './CouponList'
import Header from './Header'
import TitleCoupon from './TitleCoupon'

const COUPON_CARD = Array.from({ length: 20 }, (_, i) => ({
  id: `coupon-${i + 1}`,
  title: `CASPER`,
  description: 'July 4th Sale! Up to 70% Off Select Mattresses',
  imgUrl: i % 2 ? `/images/brandCard.webp` : `/images/brandCard2.webp`,
  badgeIcon: i % 2 ? '/images/fire.svg' : '/images/cashback-bolt.svg',
  badgeTitle: '15% Off',
}))

export default function CouponsPage() {
  return (
    <div className="bg-white">
      {/** Title */}
      <Header />
      <section className="mx-auto w-full max-w-[1280px] ">
        <TitleCoupon title="Best 4th of July Sales &amp; Deals 2025" link="/" />
        <CouponList coupons={COUPON_CARD} />
      </section>
    </div>
  )
}
