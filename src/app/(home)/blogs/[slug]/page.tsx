import React, { Suspense } from 'react'
import Link from 'next/link'
import CategoryHeader from '../components/CategoryHeader'
import CommentSection from '@/app/(home)/blogs/[slug]/comment/CommentSection'
import { formatDate, formatDisplayName } from '@/helpers/format'
import Image from 'next/image'
import { getBlogBySlug, getLatestBlogs } from '@/services/blogApi'
import { APP_ROUTERS } from '@/helpers/config'
import { notFound, redirect } from 'next/navigation'
import ListBlog from '../components/ListBlogs'
import TrendingBlogs from '../components/TrendingBlogs'
import ListBlogs from '../components/ListBlogs'

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!slug) {
    redirect(APP_ROUTERS.BLOGS)
  }
  const [blogRes, latestRes] = await Promise.all([
    getBlogBySlug(slug),
    getLatestBlogs(),
  ])

  if (!blogRes.success || !blogRes.data?.blog) {
    notFound()
  }
  const blog = blogRes.data.blog
  const latest = latestRes.data || []
  const readMore = blogRes.data.read_more
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-[1162px]">
        <div className="mb-10 flex flex-col gap-[30px] md:flex-row">
          <div className="flex-1">
            <section className="">
              <div className="relative px-8 py-6 font-semibold">
                <h1 className="text-olive-green text-5xl leading-16 font-bold">
                  {blog.title}
                </h1>
                <div className="mt-2 flex items-center gap-1 text-sm">
                  <Link
                    href=""
                    className="hover:text-green font-bold uppercase transition-all duration-300 ease-out"
                    style={{ letterSpacing: '2px' }}
                  >
                    {blog.topic?.name}
                  </Link>
                  <span className="px-2">·</span>
                  <span className="text-gray-500">
                    {formatDate(blog.created_at)}
                  </span>
                  <span className="px-2">·</span>
                  <span className="text-gray-600">
                    By{' '}
                    <Link
                      href=""
                      className="hover:text-green text-oliver-green font-semibold transition-all duration-300 ease-out"
                    >
                      {formatDisplayName(blog.user)}
                    </Link>
                  </span>
                  <span className="border-light-green relative ml-4 block h-[40px] w-[40px] overflow-hidden rounded-full border-1 border-solid">
                    <Image
                      fill
                      sizes="auto"
                      priority
                      src={blog.topic.image.url || '/images/no-img.webp'}
                      alt={blog.topic.name}
                    />
                  </span>
                </div>
              </div>
            </section>
            <div
              className="mt-10 px-10"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            <div className="my-10 flex gap-4">
              <span className="relative size-[90px] overflow-hidden rounded-full">
                <Image
                  fill
                  sizes="auto"
                  priority
                  src={'/images/no-img.webp'}
                  alt={formatDisplayName(blog.user)}
                />
              </span>
              <p>
                <b className="text-green text-lg font-bold">
                  {formatDisplayName(blog.user)}
                </b>
              </p>
            </div>
            <Suspense>
              <CommentSection blog_id={blog.id} />
            </Suspense>
          </div>
          <div className="hidden w-full md:w-1/3 lg:block">
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
          <CategoryHeader title="Read More" href="/" />
          <ListBlogs type="grid" blogs={readMore} />
        </div>
      </div>
    </div>
  )
}
