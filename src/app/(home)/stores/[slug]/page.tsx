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
import Head from 'next/head'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const slug = (await params).slug

  // fetch post information
  const res = await getStoreBySlug(slug)
  if (!res.success || !res.data?.store) {
    notFound()
  }
  const store = res.data.store
  return {
    category: store.categories ? store.categories[0].name : 'website',
    title: store.name,
    description: store.meta_data?.description,
    keywords: store.keywords,
    openGraph: {
      title: store.name,
      description: store.meta_data?.description,
      url: `${METADATA.APP_URL}/stores/${store.slug}`,

      images: store.image
        ? [
            {
              url: store.image.url,
              alt: `${METADATA.APP_URL} Image`,
              width: 1200,
              height: 630,
              type: 'article',
            },
          ]
        : [],
    },
    twitter: {
      title: store.name,
      description: store.meta_data?.description,
      images: store.image
        ? [
            {
              url: store.image.url,
              alt: `${METADATA.APP_URL} Image`,
              width: 1200,
              height: 630,
              type: 'article',
            },
          ]
        : [],
    },
  }
}
export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params
  const res = await getStoreBySlug(slug)
  // const storeDetail: Partial<StoreData> | null = res.data ?? null
  if (!res.success || !res.data) {
    return notFound()
  }
  const store = res.data.store
  const similar_store = res.data.similar_stores
  return (
    <Fragment>
      <Head>
        <link rel="canonical" href={`${METADATA.APP_URL}/stores/${slug}`} />
      </Head>
      <div className="px-4 pb-10">
        <TopSplide />{' '}
        <div className="absolute right-0 left-0 hidden min-h-16 py-6 shadow-sm lg:block lg:bg-white">
          <div className="mx-auto flex max-w-(--max-width) gap-10">
            <div className="bg-white lg:w-92 xl:w-[336px]"></div>
            <div className="">
              <p className="font-sans-bold mb-3 hidden items-center self-center text-xl leading-tight font-extrabold [grid-area:heading] lg:mt-1 lg:-mb-3 lg:flex lg:items-center lg:self-start lg:pl-0 lg:text-4xl">
                {store?.name} Coupons & promo codes
              </p>
              <p className="mt-4 text-sm font-[600] tracking-wider uppercase">
                Top offers for {dayjs().format('MMMM D, YYYY')}
              </p>
            </div>
          </div>
        </div>
        <section className="mx-auto flex max-w-(--max-width) flex-col gap-4 lg:flex-row lg:gap-14 xl:gap-0">
          <div className="z-1 bg-white py-4 lg:bg-transparent lg:py-0">
            <div className={`w-full lg:h-32 lg:bg-none lg:shadow-none`}>
              <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start">
                <div className="focus-within:border-green rounded-[100%] border-2 border-white p-1">
                  <Link href={store.url} target="_blank">
                    <div className="relative block size-[64px] rounded-[100%] bg-white shadow-xl lg:size-[208px]">
                      <Image
                        fill
                        priority
                        src={store.image?.url || '/images/female.webp'}
                        alt={store?.name}
                        sizes="auto"
                        className="size-full rounded-[100%] object-contain"
                      />
                    </div>
                  </Link>
                </div>
                <p className="font-sans-bold flex min-h-16 items-center self-center text-xl leading-tight font-extrabold [grid-area:heading] lg:mt-1 lg:-mb-3 lg:hidden lg:items-center lg:self-start lg:pl-0 lg:text-4xl">
                  {store?.name} {' Coupons & promo codes'}
                </p>
              </div>
            </div>
            <div className={`hidden lg:block`}>
              <StoreInfo store={store} similar_store={similar_store} />
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
            <OffersTable coupons={store?.coupons ?? []} />
            <div className={`block lg:hidden`}>
              <StoreInfo store={store} similar_store={similar_store} />
            </div>
            <div className="mb-10">
              <div
                dangerouslySetInnerHTML={{ __html: store.description || '' }}
              />
            </div>
            {store.faqs && store.faqs.length > 0 && <FAQs store={store} />}
          </section>
        </section>
      </div>
    </Fragment>
  )
}
