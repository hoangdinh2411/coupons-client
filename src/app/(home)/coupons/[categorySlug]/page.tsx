import { getCategoryBySlug, getCouponsByCategory } from '@/services/categoryApi'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import TopSplide from '../../stores/[slug]/TopSplide'
import CouponsHeader from './CouponHeader'
import ListCoupons from './ListCoupons'
import SideSection from './SideSection'
import { Metadata } from 'next'
import { METADATA } from '@/helpers/config'
import { Fragment } from 'react'
import Head from 'next/head'
import dayjs from 'dayjs'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>
}): Promise<Metadata> {
  const categorySlug = (await params).categorySlug

  // fetch post information
  const categoryResponse = await getCategoryBySlug(categorySlug)
  if (!categoryResponse.success || !categoryResponse.data) {
    return notFound()
  }
  const { category } = categoryResponse.data
  const title = `${category.meta_data?.title} ${dayjs(category.updated_at).format('MMMM YYYY')}`
  return {
    category: category.name,
    title: title,
    description: category.meta_data?.description,
    keywords: category.meta_data?.keywords,
    alternates: {
      canonical: `/coupons/${categorySlug}`,
    },
    openGraph: {
      title: title,
      description: category.meta_data?.description,
      url: `${METADATA.APP_URL}/coupons/${categorySlug}`,
      images: [
        {
          url: category.image.url,
          alt: `${METADATA.APP_URL} Image`,
          width: 1200,
          height: 630,
          type: 'article',
        },
      ],
    },
    twitter: {
      title: title,
      description: category.meta_data?.description,
      images: [
        {
          url: category.image.url,
          alt: `${METADATA.APP_URL} Image`,
          width: 1200,
          height: 630,
          type: 'article',
        },
      ],
    },
  }
}

const CouponsByCategoryPage = async ({
  params,
}: {
  params: Promise<{ categorySlug: string }>
}) => {
  const { categorySlug } = await params
  const categoryResponse = await getCategoryBySlug(categorySlug)
  if (!categoryResponse.success || !categoryResponse.data) {
    return notFound()
  }
  const { category, count_coupons, similar_stores, top_deals } =
    categoryResponse.data
  const totalCoupons = parseInt(count_coupons.total_coupons) || 0
  const couponsResponse = await getCouponsByCategory(category.id, 1)
  const { data: coupons } = couponsResponse
  return (
    <Fragment>
      <Head>
        <link
          rel="canonical"
          href={`${METADATA.APP_URL}/coupons/${categorySlug}`}
        />
      </Head>
      <div>
        <div className="px-4">
          <TopSplide />
        </div>

        <CouponsHeader title={category.name} />

        <div className="container mx-auto grid max-w-screen-xl grid-cols-[theme(spacing.24)_auto] px-2 lg:mt-4 lg:grid-cols-[theme(spacing.80)_auto] lg:pt-40">
          <SideSection
            category={category}
            countCoupons={count_coupons}
            similarStores={similar_stores}
          />

          <ListCoupons
            topDeals={top_deals}
            coupons={coupons || []}
            category={category}
            totalCoupons={totalCoupons}
            categoryId={category.id}
          />

          <div className="col-span-2 row-start-1 mb-4 hidden text-center text-[10px] lg:col-span-1 lg:row-start-3 lg:mx-0 lg:mt-3 lg:mr-16 lg:mb-8 lg:block lg:text-left lg:text-sm">
            When you buy through links on TrustCoupon{' '}
            <Link href="#" className="block underline md:inline">
              we may earn a commission.
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CouponsByCategoryPage
