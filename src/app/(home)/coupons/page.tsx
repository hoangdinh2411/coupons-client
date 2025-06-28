'use client'
import React from 'react'
import CardCoupon from './CardCoupon'
import Link from 'next/link'

const CouponTemplate: React.FC = () => {
  const topCategories = [
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

  const allCategories = {
    Automotive: [
      'Motorcycles',
      'Car Stereo and Electronics',
      'Tires and Wheels',
    ],
    'Entertainment and Recreation': [
      'Concerts and Event Tickets',
      'Movie Theaters',
      'Music and Musical Instruments',
      'Amusement and Theme Parks',
      'Gambling',
      'Party and Event Supplies',
      'Birthday Supplies',
      'Graduation',
      'Invitations',
    ],
    Luggage: [
      'Backpacks',
      'Nursery and Garden',
      'Seeds and Plants',
      'Pools and Supplies',
      'Home Improvement and Tools',
      'Power Tools',
      'Woodworking Tools',
      'Outdoor Power Equipment',
      'Hardware and Tools',
    ],
    Baby: ['Baby Furniture'],
    'Beauty and Personal Care': ['Personal Care', 'Vitamins and Supplements'],
  }

  return (
    <div className="container mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10 my-10 w-full">
      {/* TOP CATEGORIES */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Top Coupons & Deals Categories
      </h2>
      <div className="flex flex-wrap justify-between gap-y-4 gap-x-2 mb-6">
        {topCategories.map((category, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/5 flex justify-center"
          >
            <CardCoupon {...category} />
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="border-b border-slate-300 mt-10 mb-12 w-full" />

      {/* ALL CATEGORIES */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        All Coupons & Deals Categories
      </h2>
      <div className="flex flex-col gap-6">
        {Object.entries(allCategories).map(([title, items]) => (
          <div key={title}>
            <Link
              href="/"
              className="text-base sm:text-lg hover:underline font-semibold mb-2 uppercase block"
            >
              {title}
            </Link>
            <ul className="list-disc pl-5">
              {items.map((item, index) => (
                <li key={index} className="text-sm sm:text-base mb-2">
                  <Link className="hover:underline" href="/">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CouponTemplate
