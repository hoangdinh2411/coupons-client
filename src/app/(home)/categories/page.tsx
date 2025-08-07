import React, { Fragment, Suspense } from 'react'
import CategoryList from './CategoryList'
import { Metadata } from 'next'
import TopCategories from './TopCategories'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import Head from 'next/head'
import { getAllCategoriesWithAllStores } from '@/services/categoryApi'

export const metadata: Metadata = {
  title: 'Categories and Stores',
  openGraph: {
    url: `${METADATA.APP_URL}/${APP_ROUTERS.ALL_CATEGORIES}`,
  },
  alternates: {
    canonical: APP_ROUTERS.ALL_CATEGORIES,
  },
}
async function CategoriesListPage() {
  const res = await getAllCategoriesWithAllStores()
  console.log(res)
  return (
    <Fragment>
      <Head>
        <link
          rel="canonical"
          href={`${METADATA.APP_URL}${APP_ROUTERS.ALL_CATEGORIES}`}
        />
      </Head>
      <div className="container mx-auto w-full max-w-(--max-width) p-8">
        <h2 className="mb-4 text-xl font-bold md:text-2xl">
          Top Coupons & Deals Categories
        </h2>
        <TopCategories />
        <h2 className="mb-4 text-xl font-[900] md:text-2xl">
          All Coupons & Deals Categories
        </h2>
        <Suspense>
          <CategoryList categories={res.data ?? []} />
        </Suspense>
      </div>
    </Fragment>
  )
}

export default CategoriesListPage
