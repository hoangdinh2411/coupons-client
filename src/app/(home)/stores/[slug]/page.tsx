import { getStoreBySlug } from '@/services/storeApi'
import { notFound } from 'next/navigation'
import React, { Fragment } from 'react'
import CouponList from './CouponList'
import FAQs from './FAQs'
import TopSplide from './TopSplide'
import StoreInfo from './StoreInfo'
import OffersTable from './OffersTable'
import dayjs from 'dayjs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { METADATA } from '@/helpers/config'
import { formatImageUrl } from '@/helpers/formatImageUrl'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const res = await getStoreBySlug(slug)
  if (!res.success || !res.data?.store) {
    notFound()
  }
  const store = res.data.store

  const pageTitle = `${store.meta_data?.title} ${dayjs().format('MMMM YYYY')}`
  const pageDescription =
    store.meta_data?.description ||
    `Find the latest verified deals and promo codes for ${store.name} at TrustCoupon.com.`

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/stores/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${METADATA.APP_URL}/stores/${store.slug}`,
      siteName: 'TrustCoupon.Com',
      type: 'website',
      images: store.image
        ? [
            {
              url: store.image.url,
              alt: `${store.name} coupons and deals`,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: store.image ? [store.image.url] : [],
    },
  }
}

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const res = await getStoreBySlug(slug)

  if (!res.success || !res.data) {
    return notFound()
  }
  const { store, similar_stores } = res.data

  // ===== Schema =====
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Schema 1: BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: METADATA.APP_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Stores',
            item: `${METADATA.APP_URL}/brands`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: store.name,
          },
        ],
      },
      // Schema 2: OfferCatalog
      {
        '@type': 'OfferCatalog',
        name: `${store.name} Coupons & Promo Codes`,
        description: store.meta_data?.description,
        numberOfItems: store.total_coupons ?? 0,
        offeredBy: {
          '@type': 'Organization',
          name: store.name,
          url: store.url,
        },
      },
      // Schema 3: FAQPage
      ...(store.faqs && store.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: store.faqs.map(
                (f: { question: string; answer: string }) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.answer,
                  },
                }),
              ),
            },
          ]
        : []),
    ],
  }

  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-4 pb-10">
        <TopSplide />{' '}
        <div className="absolute right-0 left-0 hidden min-h-16 py-6 shadow-sm lg:block lg:bg-white">
          <div className="mx-auto flex max-w-7xl gap-10">
            <div className="bg-white lg:w-92 xl:w-[336px]"></div>
            <div className="">
              <h1 className="mb-3 hidden items-center self-center font-sans text-xl leading-tight font-bold [grid-area:heading] lg:mt-1 lg:-mb-3 lg:flex lg:items-center lg:self-start lg:pl-0 lg:text-4xl">
                {store?.name} Coupons & promo codes
              </h1>
              <p className="mt-4 text-sm font-[600] tracking-wider uppercase">
                Top offers for {dayjs().format('MMMM D, YYYY')}
              </p>
            </div>
          </div>
        </div>
        <section className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:gap-14 xl:gap-0">
          <div className="z-1 bg-white py-4 lg:bg-transparent lg:py-0">
            <div className={`w-full lg:h-32 lg:bg-none lg:shadow-none`}>
              <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start">
                <div className="focus-within:border-green rounded-[100%] border-2 border-white p-1">
                  <Link href={store.url} target="_blank">
                    <div className="relative block size-[64px] rounded-[100%] bg-white shadow-xl lg:size-[208px]">
                      <Image
                        fill
                        priority
                        src={formatImageUrl(store.image?.public_id)}
                        alt={store?.name || 'Store Logo'}
                        className="size-full rounded-[100%] object-contain"
                      />
                    </div>
                  </Link>
                </div>
                <p className="flex min-h-16 items-center self-center font-sans text-xl leading-tight font-bold [grid-area:heading] lg:mt-1 lg:-mb-3 lg:hidden lg:items-center lg:self-start lg:pl-0 lg:text-4xl">
                  {store?.name} {' Coupons & promo codes'}
                </p>
              </div>
            </div>
            <div className={`hidden lg:block`}>
              <StoreInfo store={store} similar_store={similar_stores} />
            </div>
          </div>

          <section className="col-span-2 mt-2 w-full lg:mt-40">
            {store.unexpired_coupons && store.unexpired_coupons.length > 0 && (
              <Fragment>
                <p className="mt-2 mb-2 block text-[12px] font-[600] tracking-wider uppercase lg:hidden">
                  Top offers for {dayjs().format('MMMM D, YYYY')}
                </p>
                <CouponList coupons={store?.unexpired_coupons ?? []} />
              </Fragment>
            )}
            {store.expired_coupons && store.expired_coupons?.length > 0 && (
              <Fragment>
                <p className="mt-2 mb-2 block text-[12px] font-[600] tracking-wider uppercase lg:hidden">
                  Expired coupons
                </p>
                <CouponList coupons={store?.expired_coupons ?? []} />
              </Fragment>
            )}
            {store?.coupons.length > 0 && (
              <OffersTable coupons={store?.coupons ?? []} />
            )}
            <div className={`block lg:hidden`}>
              <StoreInfo store={store} similar_store={similar_stores} />
            </div>
            <div className="mb-10">
              <div
                className="not-prose no-tailwindcss-base"
                dangerouslySetInnerHTML={{ __html: store.description }}
              ></div>
            </div>
            {store.faqs && store.faqs.length > 0 && <FAQs store={store} />}
          </section>
        </section>
      </div>
    </Fragment>
  )
}
