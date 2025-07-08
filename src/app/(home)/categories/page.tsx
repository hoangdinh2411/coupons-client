import React, { Suspense } from 'react'
import CardCoupon from './CardCoupon'
import CategoryList from './CategoryList'
import { Metadata } from 'next'
import SpinnerLoading from '@/components/loading'
const TOP_CATEGORIES = [
  {
    content: 'Beauty and Personal Care',
    imgUrl: '/images/no-img.webp',
    href: '/beauty',
  },
  {
    content: 'Clothing, Shoes, Accessories',
    imgUrl: '/images/no-img.webp',
    href: '/clothing',
  },
  {
    content: 'Electronics',
    imgUrl: '/images/no-img.webp',
    href: '/electronics',
  },
  {
    content: 'Home and Garden',
    imgUrl: '/images/no-img.webp',
    href: '/home',
  },
  {
    content: 'Pets',
    imgUrl: '/images/no-img.webp',
    href: '/pets',
  },
]
export const metadata: Metadata = {
  title: 'Categories and Stores',
}
function CouponPage() {
  return (
    <div className="container mx-auto w-full max-w-[1280px] p-8">
      <h2 className="mb-4 text-xl font-bold md:text-2xl">
        Top Coupons & Deals Categories
      </h2>
      <div className="my-9 flex flex-wrap items-center gap-1 gap-y-4 border-b-1 border-solid border-gray-200 pb-9">
        <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {TOP_CATEGORIES.map((category, index) => (
            <CardCoupon {...category} key={index} />
          ))}
        </div>
      </div>
      <h2 className="mb-4 text-xl font-[900] md:text-2xl">
        All Coupons & Deals Categories
      </h2>
      <Suspense fallback={<SpinnerLoading />}>
        <CategoryList />
      </Suspense>
    </div>
  )
}

export default CouponPage
