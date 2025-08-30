import React, { Fragment, Suspense } from 'react'
import CategoryList from './CategoryList'
import { Metadata } from 'next'
import TopCategories from './TopCategories'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
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

  const firstCategoryImage = res.data?.[0]?.image?.url

  return (
    <Fragment>
      {firstCategoryImage && (
        <link
          rel="preload"
          as="image"
          href={firstCategoryImage}
          fetchPriority="high"
        />
      )}

      <div className="container mx-auto w-full max-w-(--max-width) p-4 md:p-8">
        <h1 className="mb-4 text-xl font-bold md:text-2xl">
          Top Coupons & Deals Categories
        </h1>
        <TopCategories />
        <h2 className="mb-4 text-xl font-[900] md:text-2xl">
          All Coupons & Deals Categories
        </h2>
        <Suspense fallback={<div>Loading categories...</div>}>
          <CategoryList categories={res.data ?? []} />
        </Suspense>
      </div>
    </Fragment>
  )
}

export default CategoriesListPage
