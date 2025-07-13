import React from 'react'
import Link from 'next/link'
import CategoryHeader from '../components/CategoryHeader'
import CommentSection from '@/components/comment/CommentSection'
import { formatDate, formatDisplayName } from '@/helpers/format'
import Image from 'next/image'
import { getBlogBySlug } from '@/services/blogApi'
import { APP_ROUTERS } from '@/helpers/config'
import { notFound, redirect } from 'next/navigation'
import ListBlog from '../components/ListBlog'

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!slug) {
    redirect(APP_ROUTERS.BLOGS)
  }
  const res = await getBlogBySlug(slug)

  if (!res.success || !res.data?.blog) {
    notFound()
  }
  const blog = res.data.blog
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-[1162px]">
        <div className="flex flex-col gap-[30px] md:flex-row">
          <div className="w-full lg:w-2/3">
            <section className="">
              <div className="relative px-8 py-6">
                <h1 className="text-5xl leading-16 font-bold text-[#323232]">
                  {blog.title}
                </h1>
                <div className="mt-2 text-sm">
                  <Link
                    href=""
                    className="hover:text-green font-bold uppercase transition-all duration-300 ease-out"
                    style={{ letterSpacing: '2px' }}
                  >
                    {blog.topic.name}
                  </Link>
                  <span className="px-2">·</span>
                  <span className="text-gray-600">
                    {formatDate(blog.created_at)}
                  </span>
                  <span className="px-2">·</span>
                  <span className="text-gray-600">
                    By{' '}
                    <Link
                      href=""
                      className="hover:text-green font-semibold text-black transition-all duration-300 ease-out"
                    >
                      {formatDisplayName(blog.user)}
                    </Link>
                  </span>
                </div>
                <span className="absolute size-[42px] rounded-full shadow-md">
                  <Image
                    width="160"
                    height="160"
                    src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2024/12/Blog-Beauty.png"
                    alt="Beauty Category Icon"
                  />
                </span>
              </div>
            </section>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            <CommentSection blog_id={blog.id} />
          </div>

          {/* <TrendingBlogs blogs={POST_PREVIEWS} /> */}
          <section>
            <h5 className="text-olive-green mb-[18px] text-lg font-bold tracking-widest uppercase">
              The Latest
            </h5>
            <ListBlog type="vertical" blogs={res.data.latest} />
          </section>
        </div>
        <div className="my-10">
          <CategoryHeader title="Read More" href="/" />
          {/* <ListBlogs type="grid" posts={LIST_POST} /> */}
        </div>
      </div>
    </div>
  )
}
