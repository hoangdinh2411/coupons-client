import React, { use } from 'react'
import CardCoupon from './CardCoupon'
import Link from 'next/link'
import { getAllCategoriesWithAllStores } from '@/services/clientApi'
import { APP_ROUTERS } from '@/helpers/config'
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

function CouponPage() {
  const res = use(getAllCategoriesWithAllStores())
  const data = res.data

  return (
    <div className="container mx-auto my-10 w-full max-w-[1280px] px-6 sm:px-6 lg:px-10">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
        Top Coupons & Deals Categories
      </h2>
      <div className="mt-10 mb-4 flex flex-wrap items-center gap-1 gap-y-4 sm:mb-6">
        <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {TOP_CATEGORIES.map((category, index) => (
            <CardCoupon {...category} key={index} />
          ))}
        </div>
      </div>
      <div className="mb-6 w-full border-b border-slate-300 sm:mt-10 sm:mb-12" />
      <h2 className="text-[20px] font-[900] sm:text-3xl">
        All Coupons & Deals Categories
      </h2>
      <div className="my-4 w-full columns-1 gap-4 lg:columns-3">
        {data &&
          data.map((cat) => (
            <div className="mb-7 md:mb-10" key={cat.id}>
              <Link
                href="/"
                className="mb-1 block text-[12px] font-semibold uppercase hover:underline sm:text-[16px]"
              >
                {cat.name}
              </Link>
              <ul className="ml-12 list-disc">
                {cat.stores &&
                  cat.stores.map((store) => (
                    <li
                      key={store.id}
                      className="text-[16px] text-slate-700 sm:text-base"
                    >
                      <Link
                        className="block w-full py-2 hover:underline"
                        href={`${APP_ROUTERS.STORES}/${store.slug}`}
                      >
                        {store.name}
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
