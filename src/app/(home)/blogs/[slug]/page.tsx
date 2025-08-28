import React, { Fragment, Suspense } from 'react'
import Link from 'next/link'
import CategoryHeader from '../components/CategoryHeader'
import CommentSection from '@/app/(home)/blogs/[slug]/comment/CommentSection'
import { formatDate, formatDisplayName } from '@/helpers/format'
import Image from 'next/image'
import { getBlogBySlug, getLatestBlogs } from '@/services/blogApi'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { notFound, redirect } from 'next/navigation'
import ListBlog from '../components/ListBlogs'
import TrendingBlogs from '../components/TrendingBlogs'
import ListBlogs from '../components/ListBlogs'
import SpinnerLoading from '@/components/loading'
import { Metadata } from 'next'
import dayjs from 'dayjs'
import Head from 'next/head'
import Breadcrumb from './Breadcrumb'
import FAQs from './FAQs'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import Script from 'next/script'
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const res = await getBlogBySlug(slug)

  if (!res.success || !res.data?.blog || res.data.blog.is_published === false) {
    notFound()
  }

  const blog = res.data.blog
  const pageUrl = `${METADATA.APP_URL}/blogs/${blog.slug}`
  const title = blog.meta_data?.title
  return {
    // 1. title, meta_data, canonical
    title: title,
    description: blog.meta_data?.description,
    robots: {
      index: blog.is_indexed,
      follow: blog.is_indexed,
      'max-image-preview': 'large',
    },
    alternates: {
      canonical: pageUrl,
    },
    // 2. Open Graph (OG)
    openGraph: {
      title: title,
      description: blog.meta_data?.description,
      url: pageUrl,
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: blog.image.url,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      // Author name
      publishedTime: dayjs(blog.updated_at).format('YYYY-MM-DD'),
      authors: [formatDisplayName(blog.user)],
      tags: blog.keywords ?? [],
    },

    // 3. Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: blog.meta_data?.description,
      images: [blog.image.url],
      // imageAlt: blog.title,
    },

    // 4. Copyright
    authors: [{ name: METADATA.NAME }],
  }
}
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!slug) {
    redirect(APP_ROUTERS.BLOGS)
  }
  const blogRes = await getBlogBySlug(slug)
  if (
    !blogRes.success ||
    !blogRes.data?.blog ||
    blogRes.data.blog.is_published === false
  ) {
    notFound()
  }
  const latestRes = await getLatestBlogs()
  const blog = blogRes.data.blog
  const latest = latestRes.data || []
  const readMore = blogRes.data.read_more
  //Schema Organization
  const jsonLd = {
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': 'https://trustcoupon.com/blogs/' + blog.slug,
        headline: blog.title,
        description: blog.meta_data?.description,
        datePublished: blog.updated_at,
        dateModified: blog.updated_at,
        author: {
          '@type': 'Person',
          name: formatDisplayName(blog.user),
          url: 'https://trustcoupon.com/me',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://trustcoupon.com/#organization',
          name: 'TrustCoupon.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://trustcoupon.com/images/logo-with-white-text-and-green-logo.png',
          },
        },
        image: [formatImageUrl(blog.image.public_id)],
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://trustcoupon.com/blogs/' + blog.slug,
        },
        articleSection: blog.topic.name,
        keywords: blog.keywords || blog.meta_data?.keywords,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://trustcoupon.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blogs',
            item: 'https://trustcoupon.com/blogs',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: blog.title,
            item: 'https://trustcoupon.com/blogs/' + blog.slug,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://trustcoupon.com/blogs/' + blog.slug,
        mainEntity: blog.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ],
  }
  const jsonLdClean = JSON.parse(JSON.stringify(jsonLd))
  return (
    <Fragment>
      <Script
        id={`ld-blog-${blog.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdClean) }}
      />
      <Head>
        {blog.keywords.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Head>
      <div className="mt-10 px-4">
        <div className="mx-auto max-w-[1162px]">
          <div className="mb-10 grid grid-cols-1 gap-10 overflow-hidden lg:grid-cols-3">
            <div className="col-span-2">
              <Breadcrumb slug={blog.title} />
              <section className="">
                <div className="relative py-6 font-semibold">
                  <h1 className="text-olive-green text-5xl leading-16 font-bold">
                    {blog.title}
                  </h1>
                  <div className="mt-2 flex items-center gap-1 text-sm">
                    <Link
                      href={`/topics/${blog.topic.slug}`}
                      className="hover:text-green font-bold uppercase transition-all duration-300 ease-out"
                      style={{ letterSpacing: '2px' }}
                    >
                      {blog.topic?.name}
                    </Link>
                    <span className="px-2">·</span>
                    <span className="text-gray-500">
                      {formatDate(blog.updated_at)}
                    </span>
                    <span className="px-2">·</span>
                    <span className="text-gray-600">
                      By{' '}
                      <Link
                        href="#"
                        className="hover:text-green text-oliver-green font-semibold transition-all duration-300 ease-out"
                      >
                        {formatDisplayName(blog.user)}
                      </Link>
                    </span>
                    <span className="border-light-green relative ml-4 block h-[40px] w-[40px] overflow-hidden rounded-full border-1 border-solid">
                      <Image
                        fill
                        sizes="80px"
                        priority
                        src={formatImageUrl(blog.topic.image.public_id)}
                        alt={blog.topic.name}
                      />
                    </span>
                  </div>
                </div>
              </section>
              <article className="overflow-hidden">
                <div
                  className="no-tailwindcss-base"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                ></div>
              </article>
              {blog.faqs && blog.faqs.length > 0 && <FAQs faqs={blog.faqs} />}
              <div className="my-10 flex gap-4">
                <span className="relative aspect-[1] w-20 overflow-hidden rounded-full">
                  <Image
                    fill
                    sizes="80px"
                    priority
                    src={formatImageUrl(blog.user.avatar?.public_id)}
                    alt={formatDisplayName(blog.user)}
                  />
                </span>

                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <b className="text-green w-full text-lg font-bold">
                    {formatDisplayName(blog.user)}
                  </b>
                  <p className="w-full">{blog.user.description}</p>

                  <div className="flex w-full items-center justify-center gap-2">
                    {blog.user.instagram && (
                      <Link
                        className="group flex items-center justify-center rounded-lg border-1 border-gray-300 p-2 transition-colors duration-200 hover:border-pink-300 hover:bg-pink-50"
                        href={blog.user.instagram}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="Instagram"
                      >
                        {/* Instagram Icon - Camera */}
                        <svg
                          className="h-5 w-5 text-gray-600 transition-colors group-hover:text-pink-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Link>
                    )}

                    {blog.user.facebook && (
                      <Link
                        className="group flex items-center justify-center rounded-lg border-1 border-gray-300 p-2 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50"
                        href={blog.user.facebook}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="Facebook"
                      >
                        {/* Facebook Icon */}
                        <svg
                          className="h-5 w-5 text-gray-600 transition-colors group-hover:text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    )}

                    {blog.user.linkedin && (
                      <Link
                        className="group flex items-center justify-center rounded-lg border-1 border-gray-300 p-2 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50"
                        href={blog.user.linkedin}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="LinkedIn"
                      >
                        {/* LinkedIn Icon */}
                        <svg
                          className="h-5 w-5 text-gray-600 transition-colors group-hover:text-blue-700"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    )}

                    {blog.user.youtube && (
                      <Link
                        className="group flex items-center justify-center rounded-lg border-1 border-gray-300 p-2 transition-colors duration-200 hover:border-red-300 hover:bg-red-50"
                        href={blog.user.youtube}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        title="YouTube"
                      >
                        {/* YouTube Icon - Play */}
                        <svg
                          className="h-5 w-5 text-gray-600 transition-colors group-hover:text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <Suspense fallback={<SpinnerLoading />}>
                <CommentSection blog_id={blog.id} />
              </Suspense>
            </div>
            <div className="hidden w-full lg:block">
              <Suspense>
                <TrendingBlogs />
              </Suspense>
              <section className="my-10 hidden max-w-[358px] lg:block">
                <h5 className="text-olive-green mb-[18px] text-lg font-bold tracking-widest uppercase">
                  The Latest
                </h5>
                <ListBlog type="vertical" blogs={latest} />
              </section>
            </div>
          </div>

          <div className="my-10">
            <CategoryHeader
              title="Read More"
              href={`/topic/${blog.topic.slug}`}
            />
            <ListBlogs type="grid" blogs={readMore} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
