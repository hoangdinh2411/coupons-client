import { Metadata } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TrendingPost from './_components/TrendingPost'
import CategoryHeader from './_components/CategoryHeader'
import ListPost from './_components/LatestPost'
import { formatDate } from '@/helpers/format'

export const metadata: Metadata = {
  title: 'Blogs',
}

const BLOG_CATEGORIES = [
  {
    category_id: '1',
    category_name: 'Budget',
    category_slug: '',
    category_image: '/images/blog-budget-124x124.webp',
  },
  {
    category_id: '2',
    category_name: 'Beauty',
    category_slug: '',
    category_image: '/images/blog-beauty-124x124.webp',
  },
  {
    category_id: '3',
    category_name: 'Fashion',
    category_slug: '',
    category_image: '/images/blog-fashion-124x124.webp',
  },
  {
    category_id: '4',
    category_name: 'Home',
    category_slug: '',
    category_image: '/images/blog-home-124x124.webp',
  },
  {
    category_id: '5',
    category_name: 'Tech',
    category_slug: '',
    category_image: '/images/blog-tech-124x124.webp',
  },
  {
    category_id: '6',
    category_name: 'Travel',
    category_slug: '',
    category_image: '/images/blog-travel-124x124.webp',
  },
  {
    category_id: '7',
    category_name: 'Deals',
    category_slug: '',
    category_image: '/images/blog-deals-124x124.webp',
  },
  {
    category_id: '8',
    category_name: 'Calendar',
    category_slug: '',
    category_image: '/images/blog-calendar-124x124.webp',
  },
]

const POST_PREVIEWS = [
  {
    post_id: '1',
    post_title:
      'The Anklet Is Back: Why This Throwback Jewelry Trend Is Taking…',
    post_published_date: '2025/06/19',
    post_image: '/images/anklet_hero-367x280.webp',
  },
  {
    post_id: '2',
    post_title:
      'LoveShackFancy x Havaianas Just Dropped the Prettiest Flip-Flops of Summer',
    post_published_date: '2025/06/18',
    post_image: '/images/loveshack_havaianas_hero-200x152.webp',
  },
  {
    post_id: '3',
    post_title:
      'Daily Deals: Prime Day Revealed, Plus Sales from Stanley & Shark',
    post_published_date: '2025/06/17',
    post_image: '/images/deal-of-the-day-4-200x152.webp',
  },
  {
    post_id: '4',
    post_title: 'The 6 Summer Trends That’ll Instantly Refresh Your Wardrobe',
    post_published_date: '2025/07/07',
    post_image: '/images/summer-trends-hero-367x280.webp',
  },
  {
    post_id: '5',
    post_title: 'Prime Day 2025 Is Tomorrow — Here’s What Will Be On…',
    post_published_date: '2025/07/07',
    post_image: '/images/amazon-prime-day-1-200x152.webp',
  },
]

const LIST_POST = [
  {
    post_id: '1',
    post_title: 'Best Prime Day Tech Deals to Shop Right Now',
    post_published_date: '2025/06/19',
    post_image: '/images/tech-prime-day-deals-1363-x-807-px-367x280.webp',
    post_category: 'Tech',
    post_category_image: '/images/blog-news.webp',
    post_slug: 'best-laneige-prime-day-deals',
  },
  {
    post_id: '2',
    post_title: '12 Best Prime Day Home Deals to Shop Right Now',
    post_published_date: '2025/06/18',
    post_image: '/images/home-prime-day-deals-367x280.webp',
    post_category: 'Home',
    post_category_image: '/images/blog-news.webp',
    post_slug: 'best-laneige-prime-day-deals',
  },
  {
    post_id: '3',
    post_title: 'Our 16 Favorite Amazon Prime Day Deals (So Far)',
    post_published_date: '2025/06/17',
    post_image: '/images/sharp-367x280.webp',
    post_category: 'Deals',
    post_category_image: '/images/blog-news.webp',
    post_slug: 'best-laneige-prime-day-deals',
  },
  {
    post_id: '4',
    post_title: 'Our 16 Favorite Amazon Prime Day Deals (So Far)',
    post_published_date: '2025/06/17',
    post_image: '/images/sharp-367x280.webp',
    post_category: 'Deals',
    post_category_image: '/images/blog-news.webp',
    post_slug: 'best-laneige-prime-day-deals',
  },
  {
    post_id: '5',
    post_title: 'Our 16 Favorite Amazon Prime Day Deals (So Far)',
    post_published_date: '2025/06/17',
    post_image: '/images/sharp-367x280.webp',
    post_category: 'Deals',
    post_category_image: '/images/blog-news.webp',
    post_slug: 'best-laneige-prime-day-deals',
    post_slug: 'best-laneige-prime-day-deals',
  },
  {
    post_id: '6',
    post_title: 'Our 16 Favorite Amazon Prime Day Deals (So Far)',
    post_published_date: '2025/06/17',
    post_image: '/images/sharp-367x280.webp',
    post_category: 'Deals',
    post_category_image: '/images/blog-news.webp',
    post_slug: 'best-laneige-prime-day-deals',
    post_slug: 'best-laneige-prime-day-deals',
  },
]

export default function Page() {
  return (
    <Fragment>
      <nav className="pt-5">
        <CategoryList categories={BLOG_CATEGORIES} />
        <div className="my-1.5 text-center text-xs">
          <p className="text-[10px] text-[#323232]">
            Every product and brand is selected by RetailMeNot&apos;s editors.
            We may earn a commission on the items you choose to buy.{' '}
            <Link className="font-bold" href="/blogs/about">
              Learn more
            </Link>
          </p>
        </div>
      </nav>

      <div className="mt-10">
        <div className="mx-auto max-w-[1162px] px-[15px]">
          <div className="flex flex-col md:flex-row">
            <div className="-mx-[15px] w-full px-[15px] md:w-2/3">
              <div className="mb-10">
                {/* post image */}
                <div>
                  <div className="min-h-full">
                    <Link href={''}>
                      <Image
                        src={'/images/amazon-prime-day-1.webp'}
                        alt={''}
                        width={765}
                        height={453}
                        className="h-auto w-full"
                      />
                    </Link>
                  </div>
                </div>
                {/* post details */}
                <div className="group relative mb-[10px] border-2 border-[#741fa233] bg-[#fefefe] px-10 py-[30px] text-left transition-all duration-300 ease-out hover:bg-[#653297]">
                  <span className="absolute -top-[10%] size-[46px] rounded-full border-2 border-[#fefefe]">
                    <Image
                      src={'/images/blog-news.webp'}
                      alt={''}
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
                      <h2 className="mb-2 text-4xl font-bold text-[#323232] group-hover:text-white">
                        Prime Day 2025 Is Tomorrow — Here’s What Will Be On…
                      </h2>
                      <span className="text-olive-green group-hover:text-white">
                        {formatDate('2025/07/07')}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-[15px] md:w-1/3">
              <div className="pt-[26px]">
                <div className="flex flex-col">
                  <h5 className="mb-[18px] text-lg font-bold tracking-widest text-[#323232] uppercase">
                    Trending
                  </h5>
                  <TrendingPost posts={POST_PREVIEWS} />
                </div>
              </div>
            </div>
          </div>

          <h5 className="mb-[30px] text-xl font-bold tracking-[.2em] uppercase">
            The Latest
          </h5>
          <div>
            <ListPost type="grid" posts={LIST_POST} />
          </div>

          <div className="mt-10">
            <CategoryHeader
              title="Daily Deals"
              image="/images/blog-news.webp"
              href="/"
            />
            <ListPost type="grid" posts={LIST_POST} />
          </div>
        </div>
      </div>
      <div
        className="mt-[100px] hidden h-[508px] w-full bg-cover bg-center px-[100px] py-[50px] md:block"
        style={{
          backgroundImage: `url('/images/retailmenot-content.webp')`,
        }}
      >
        <div className="h-full max-w-[800px] rounded-[35px] bg-[#f9c7d0] p-[70px]">
          <div className="relative px-5">
            <h2 className="relative z-10 mb-2 text-5xl font-extrabold uppercase">
              Deals delivered to your inbox.
            </h2>
            <h3 className="mb-2 text-lg font-normal">
              Subscribe now for top-notch shopping advice
            </h3>
            <div>
              <form>
                <input
                  type="email"
                  className="mb-3 h-[50px] w-full rounded-full bg-white pl-5"
                  placeholder="Your email"
                />
                <div className="mt-[10px] flex items-center gap-4">
                  <button
                    type="submit"
                    className="w-[160px] cursor-pointer rounded-full bg-black px-6 py-[10px] font-bold text-white transition-all duration-300 ease-out hover:bg-[#653297]"
                  >
                    Subscribe
                  </button>
                  <Link href={''} className="hover:underline">
                    Privacy Policy
                  </Link>
                </div>
              </form>
            </div>
            <div
              style={{
                backgroundImage: `url(/images/texture-bg2.svg)`,
                backgroundPosition: 'center 0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                content: '',
                height: '100%',
                left: '0',
                position: 'absolute',
                top: '0',
                width: '100%',
                zIndex: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
