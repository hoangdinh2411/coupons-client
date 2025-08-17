import Image from 'next/image'
import Pagination from '@/components/pagination'
import { Fragment, Suspense } from 'react'
import TopicList from '@/components/topic/TopicList'
import Link from 'next/link'
import { getBlogsByTopic, getTopics } from '@/services/topicApi'
import { notFound, redirect } from 'next/navigation'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import ListBlogs from '../../blogs/components/ListBlogs'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!slug) {
    redirect(APP_ROUTERS.INDEX)
  }
  const res = await getTopics()

  if (!res.success || !res.data) {
    throw new Error(res.message ?? 'Cannot fetch topics')
  }
  const currentTopic = res.data.find((t) => t.slug === slug)
  return {
    category: currentTopic?.name,
    title: currentTopic?.name,
    description: currentTopic?.description,
    keywords: currentTopic?.name,
    alternates: {
      canonical: `/topics/${slug}`,
    },
    openGraph: {
      title: currentTopic?.name,
      description: currentTopic?.meta_data?.description,
      url: `${METADATA.APP_URL}/topics/${slug}`,

      images: currentTopic?.image
        ? [
            {
              url: currentTopic?.image.url,
              alt: `${METADATA.APP_URL} Image`,
              width: 1200,
              height: 630,
              type: 'article',
            },
          ]
        : [],
    },
    twitter: {
      title: currentTopic?.name,
      description: currentTopic?.meta_data?.description,
      images: currentTopic?.image
        ? [
            {
              url: currentTopic?.image.url,
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

export default async function TopicDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { slug } = await params
  const search = await searchParams
  const page = search.page || 1
  if (!slug) {
    redirect(APP_ROUTERS.INDEX)
  }
  const limit = 12
  const [blogsRes, topicRes] = await Promise.all([
    getBlogsByTopic(slug, +page, limit),
    getTopics(),
  ])

  if (!topicRes.success || !topicRes.data) {
    throw new Error(topicRes.message ?? 'Cannot fetch topics')
  }
  if (!blogsRes.success || !blogsRes.data) {
    notFound()
  }

  const topics = topicRes.data || []
  const blogs = blogsRes?.data?.results || []
  const top_blogs = blogs.slice(0, 3)
  const rest = blogs.slice(3, blogs.length)
  const total = blogsRes?.data?.total
  const topic = blogs[0]?.topic || []

  return (
    <Fragment>
      <nav className="mx-auto max-w-[1162px] pt-10">
        <TopicList topics={topics} />
        <div className="mt-4 text-center text-xs">
          <p className="text-olive-green text-xs">
            Every product and brand is selected by TrustCoupon&apos;s editors.
            We may earn a commission on the items you choose to buy.{' '}
            <Link className="font-bold" href="/blogs/about">
              Learn more
            </Link>
          </p>
        </div>
      </nav>
      <div className="mt-10 px-4">
        <div className="mx-auto max-w-[1162px]">
          <div className="mb-10 flex flex-wrap items-center justify-between">
            <div className="flex-1">
              <h1 className="flex items-center gap-4 text-5xl font-bold text-[#ff5c6d] capitalize">
                <Image
                  className="size-10 rounded-full border-2 border-gray-100"
                  src={topic?.image?.url || '/images/no-img.webp'}
                  alt={topic?.name || ''}
                  width={160}
                  height={160}
                />
                {slug}
              </h1>
              <p>{topic.description}</p>
            </div>
          </div>

          <ListBlogs blogs={top_blogs} type="auto" />
          <div className="mb-10 flex flex-col gap-[30px] md:flex-row">
            <div className="flex-1">
              <ListBlogs blogs={rest} type="row" />
              <div className="flex items-center justify-center py-5">
                <Suspense>
                  <Pagination total={total} limit={limit} currentPage={+page} />
                </Suspense>
              </div>
            </div>
            <div className="hidden w-full md:w-1/3 lg:block"></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
