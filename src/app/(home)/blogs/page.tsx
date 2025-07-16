import { Metadata } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TrendingPost from './components/TrendingBlogs'
import CategoryHeader from './components/CategoryHeader'
import ListPost from './components/LatestBlog'
import { formatDate } from '@/helpers/format'
import { getLatestBlogsAndBlogPerTopics } from '@/services/blogApi'

export const metadata: Metadata = {
  title: 'Blogs',
}

export default async function Page() {
  const res = await getLatestBlogsAndBlogPerTopics()
  if (!res.success || !res.data) {
    throw new Error(res.message ?? 'cannot get latest blogs')
  }
  // const blogs_per_topic = res.data.blogs_per_topic
  const newest = res.data.latest && res.data.latest[0]
  const latest = res.data.latest.slice(6, res.data.latest.length)
  const trending = res.data.latest.slice(1, 6)
  return (
    <Fragment>
      <div className="mt-10">
        <div className="mx-auto max-w-[1162px]">
          <div className="flex flex-col gap-[30px] md:flex-row">
            <div className="w-full lg:w-2/3">
              {newest?.id ? (
                <div className="mb-10">
                  {/* post image */}
                  <div>
                    <div className="min-h-full">
                      <Link href={''}>
                        <Image
                          src={newest.image.url || '/images/no-img.webp'}
                          alt={newest.title}
                          width={765}
                          height={453}
                          className="h-auto w-full"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="group relative mb-[10px] border-2 border-[#741fa233] bg-[#fefefe] px-10 py-[30px] text-left transition-all duration-300 ease-out hover:bg-[#653297]">
                    <span className="absolute -top-[10%] size-[46px] rounded-full border-2 border-[#fefefe]">
                      <Image
                        src={'/images/blog-news.webp'}
                        alt={'aaa'}
                        width={46}
                        height={46}
                      />
                    </span>
                    <Link href="">
                      <div className="mt-3">
                        <span className="text-md font-bold tracking-wide text-[#741fa2] uppercase group-hover:text-white">
                          News
                        </span>
                      </div>
                      <div>
                        <h2 className="text-olive-green mb-2 text-4xl font-bold group-hover:text-white">
                          {newest.title}
                        </h2>
                        <span className="text-olive-green group-hover:text-white">
                          Published {formatDate('2025/07/07')}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <p>Blogs not found </p>
              )}
            </div>

            <TrendingPost blogs={trending} />
          </div>
          <h5 className="mb-[30px] text-xl font-bold tracking-[.2em] uppercase">
            The Latest
          </h5>
          <div>
            <ListPost type="grid" blogs={latest} />
          </div>
          <div className="my-10">
            <CategoryHeader
              title="Daily Deals"
              image="/images/blog-news.webp"
              href="/"
            />
            <ListPost type="grid" blogs={latest} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
