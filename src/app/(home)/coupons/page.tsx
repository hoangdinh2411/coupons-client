'use client'
import React from 'react'
import CardCoupon from './CardCoupon'
import Link from 'next/link'
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

const ALL_CATEGORIES = {
  Automotive: ['Motorcycles', 'Car Stereo and Electronics', 'Tires and Wheels'],
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
  Automotive2: [
    'Motorcycles',
    'Car Stereo and Electronics',
    'Tires and Wheels',
  ],
  Entertainment: [
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
  Luggage2: [
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
  Baby2: ['Baby Furniture'],
}
function CouponPage() {
  return (
    <div className="container mx-auto my-10 w-full max-w-[1280px] px-6 sm:px-6 lg:px-10">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
        Top Coupons & Deals Categories
      </h2>
      <div className="mt-10 mb-4 flex flex-wrap items-center gap-1 gap-y-4 sm:mb-6">
        {TOP_CATEGORIES.map((category, index) => (
          <div
            key={index}
            className="flex w-[calc(50%-4px)] justify-center md:w-[calc(33%-4px)] lg:w-[calc(20%-4px)]"
          >
            <CardCoupon {...category} />
          </div>
        ))}
      </div>
      <div className="mb-6 w-full border-b border-slate-300 sm:mt-10 sm:mb-12" />
      <h2 className="text-[20px] font-[900] sm:text-3xl">
        All Coupons & Deals Categories
      </h2>
      <div className="my-4 w-full columns-1 gap-4 lg:columns-3">
        {Object.entries(ALL_CATEGORIES).map(([title, items]) => (
          <div className="mb-7 md:mb-10" key={title}>
            <Link
              href="/"
              className="mb-1 block text-[12px] font-semibold uppercase hover:underline sm:text-[16px]"
            >
              {title}
            </Link>
            <ul className="ml-12 list-disc">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 text-[16px] text-slate-700 sm:text-base"
                >
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

export default CouponPage
