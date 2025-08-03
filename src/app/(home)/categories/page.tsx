import React from 'react'
import CategoryList from './CategoryList'
import { Metadata } from 'next'
import TopCategories from './TopCategories'

export const metadata: Metadata = {
  title: 'Categories and Stores',
}
function CouponPage() {
  return (
    <div className="container mx-auto w-full max-w-(--max-width) p-8">
      <h2 className="mb-4 text-xl font-bold md:text-2xl">
        Top Coupons & Deals Categories
      </h2>
      <TopCategories />
      <h2 className="mb-4 text-xl font-[900] md:text-2xl">
        All Coupons & Deals Categories
      </h2>

      <CategoryList />
    </div>
  )
}

export default CouponPage
