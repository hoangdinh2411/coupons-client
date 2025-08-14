import { Metadata } from 'next'
import { Fragment, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TrendingPost from './components/TrendingBlogs'
import CategoryHeader from './components/CategoryHeader'
import ListPost from './components/ListBlogs'
import { formatDate } from '@/helpers/format'
import { getBlogsPerTopic, getLatestBlogs } from '@/services/blogApi'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { formatImageUrl } from '@/helpers/formatImageUrl'

export const metadata: Metadata = {
  title: 'All Blogs',
  openGraph: {
    url: `${METADATA.APP_URL}/${APP_ROUTERS.BLOGS}`,
  },
  alternates: {
    canonical: `/blogs`,
  },
}

export default async function BlogsPage() {
  const [latestRes, blogPerTopicRes] = await Promise.all([
    getLatestBlogs(),
    getBlogsPerTopic(),
  ])

  if (!latestRes.success || !latestRes.data) {
    throw new Error(latestRes.message || 'cannot get latest blogs')
  }
  if (!blogPerTopicRes.success || !blogPerTopicRes.data) {
    throw new Error(blogPerTopicRes.message || 'cannot get blogs per topic')
  }
  // const blogs_per_topic = res.data.blogs_per_topic
  const newest = latestRes.data[0]
  const latest = latestRes.data.slice(1, latestRes.data.length)
  const blogs_per_topic = Object.values(blogPerTopicRes.data)
  return (
    <Fragment>
      <div className="mt-4 px-4 lg:mt-10">
        <div className="mx-auto max-w-[1162px]">
          <div className="flex flex-col gap-[30px] md:flex-row">
            <div className="w-full lg:w-2/3">
              {newest?.id ? (
                <Link href={`/blogs/${newest.slug}`} className="mb-10">
                  {/* post image */}
                  <div>
                    <div className="relative aspect-[765/453] max-h-[453px] min-h-full w-full max-w-[765px] lg:aspect-[1]">
                      <Image
                        src={formatImageUrl(newest.image.public_id)}
                        alt={newest.title}
                        fill
                        priority
                        sizes="auto"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="group relative mb-[10px] border-2 border-[#741fa233] bg-[#fefefe] px-10 py-[30px] text-left transition-all duration-300 ease-out hover:bg-[#653297]">
                    <span className="absolute -top-[10%] size-[46px] rounded-full border-2 border-[#fefefe]">
                      <Image
                        src={'/images/blog-news.webp'}
                        alt={'aaa'}
                        width={46}
                        height={46}
                        className="object-cover"
                      />
                    </span>
                    <div>
                      <div className="mt-3">
                        <span className="text-md font-bold tracking-wide text-[#741fa2] uppercase group-hover:text-white">
                          News
                        </span>
                      </div>
                      <div>
                        <h2 className="text-olive-green mb-2 text-2xl font-bold group-hover:text-white lg:text-4xl">
                          {newest.title}
                        </h2>
                        <span className="text-olive-green text-sm group-hover:text-white">
                          Published {formatDate(newest.updated_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <p>Blogs not found </p>
              )}
            </div>

            <div className="hidden w-1/3 lg:block">
              <Suspense>
                <TrendingPost />
              </Suspense>
            </div>
          </div>
          <h5 className="mt-[30px] mb-[10px] text-base font-bold tracking-[.2em] uppercase lg:mb-[30px] lg:text-xl">
            The Latest
          </h5>
          <div>
            <ListPost type="grid" blogs={latest} />
          </div>
          {blogs_per_topic &&
            blogs_per_topic.map((list, listIndex) => {
              if (list.length === 0) return null
              const topic = list[0].topic
              return (
                <div className="my-10" key={listIndex}>
                  <CategoryHeader
                    title={topic.name}
                    image={formatImageUrl(topic.image.public_id)}
                    href={`/topics/${topic.slug}`}
                  />
                  <ListPost type="grid" blogs={list} />
                </div>
              )
            })}
        </div>
      </div>
    </Fragment>
  )
}
