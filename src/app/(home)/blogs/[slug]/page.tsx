import React from 'react'
import TrendingPost from '../_components/TrendingPost'
import Link from 'next/link'
import CategoryHeader from '../_components/CategoryHeader'
import ListPost from '../_components/LatestPost'

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const POST_PREVIEWS = [
    {
      post_id: '1',
      post_title:
        'The Anklet Is Back: Why This Throwback Jewelry Trend Is Taking…',
      post_published_date: 'Published June 19, 2025',
      post_image: '/images/anklet_hero-367x280.webp',
    },
    {
      post_id: '2',
      post_title:
        'LoveShackFancy x Havaianas Just Dropped the Prettiest Flip-Flops of Summer',
      post_published_date: 'Published June 18, 2025',
      post_image: '/images/loveshack_havaianas_hero-200x152.webp',
    },
    {
      post_id: '3',
      post_title:
        'Daily Deals: Prime Day Revealed, Plus Sales from Stanley & Shark',
      post_published_date: 'Published June 17, 2025',
      post_image: '/images/deal-of-the-day-4-200x152.webp',
    },
    {
      post_id: '4',
      post_title: 'The 6 Summer Trends That’ll Instantly Refresh Your Wardrobe',
      post_published_date: 'Published July 7, 2025',
      post_image: '/images/summer-trends-hero-367x280.webp',
    },
    {
      post_id: '5',
      post_title: 'Prime Day 2025 Is Tomorrow — Here’s What Will Be On…',
      post_published_date: 'Published July 7, 2025',
      post_image: '/images/amazon-prime-day-1-200x152.webp',
    },
  ]

  const BLOG_POSTS = [
    {
      post_title: 'Celeb-Fave Laneige Lip Mask Is on Major Sale for Prime Day',
      post_category: 'Beauty',
      post_published_date: 'July 10, 2025',
      post_author: 'Esther Carlstone',
      slug: 'best-laneige-prime-day-deals',
      content: `
        <div class="post-featured-image mb-8">
          <img width="765" height="453" src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2025/07/LaneigeheroupdateRMN-765x453.jpg" alt="Celeb-Fave Laneige Lip Mask Is on Major Sale for Prime Day" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <section class="post-content max-w-3xl mx-auto">
          <p class="text-lg text-gray-700 mb-6">Prime Day is back, running until tomorrow night (11:59 PST), with amazing deals on Laneige skincare products!</p>
          <p class="text-lg text-gray-700 mb-6">The <a href="https://zdcs.link/8B8j1?u=https://www.retailmenot.com/blog/best-laneige-prime-day-deals.html" target="_blank" rel="noreferrer noopener" class="text-blue-600 hover:underline">Laneige Sleeping Lip Mask</a>, loved by celebs like Kate Hudson and Gigi Hadid, is a viral K-Beauty hit for its super moisturizing formula.</p>
          <hr class="wp-block-separator border-t border-gray-300 my-8">
          <h2 class="wp-block-heading text-2xl font-semibold text-gray-800 text-center mb-6">Top Laneige Prime Day Deals</h2>
          <div class="wp-block-media-text is-stacked-on-mobile grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <figure class="wp-block-media-text__media">
              <img width="500" height="500" src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2024/07/neige.jpg" alt="pink jar of laneige lip mask" class="wp-image-155938 w-full h-auto rounded-lg">
            </figure>
            <div class="wp-block-media-text__content md:col-span-2 flex flex-col justify-center">
              <h3 class="wp-block-heading text-xl font-medium text-gray-800 mb-2">LANEIGE Lip Sleeping Mask</h3>
              <p class="text-gray-600 mb-4"><strong>30% off – $16.80</strong> at Amazon (Orig. $24)</p>
              <p class="text-gray-600 mb-4">This hydrating lip mask is packed with berry fruit complex and shea butter for soft, plump lips.</p>
              <div class="wp-block-buttons is-content-justification-center">
                <a class="wp-block-button__link bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition" href="https://zdcs.link/8B8j1?u=https://www.retailmenot.com/blog/best-laneige-prime-day-deals.html" target="_blank" rel="noreferrer noopener">Get Deal</a>
              </div>
            </div>
          </div>
          <div class="wp-block-media-text is-stacked-on-mobile grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <figure class="wp-block-media-text__media">
              <img width="500" height="500" src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2024/07/image-8-1024x1024.jpg" alt="blue container of laneige water bank" class="wp-image-155943 w-full h-auto rounded-lg">
            </figure>
            <div class="wp-block-media-text__content md:col-span-2 flex flex-col justify-center">
              <h3 class="wp-block-heading text-xl font-medium text-gray-800 mb-2">Laneige Water Bank Hyaluronic Blue Moisturizer</h3>
              <p class="text-gray-600 mb-4"><strong>26% off – $28</strong> at Amazon (Orig. $38)</p>
              <p class="text-gray-600 mb-4">A lightweight moisturizer with blue hyaluronic acid that hydrates without stickiness, perfect for day or night use.</p>
              <div class="wp-block-buttons is-content-justification-center">
                <a class="wp-block-button__link bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition" href="https://zdcs.link/no1e8?u=https://www.retailmenot.com/blog/best-laneige-prime-day-deals.html" target="_blank" rel="noreferrer noopener">Shop Now</a>
              </div>
            </div>
          </div>
          <div class="wp-block-media-text is-stacked-on-mobile grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <figure class="wp-block-media-text__media">
              <img width="500" height="500" src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2024/07/image-7-1024x1024.png" alt="white bottle of laneige cream" class="wp-image-155942 w-full h-auto rounded-lg">
            </figure>
            <div class="wp-block-media-text__content md:col-span-2 flex flex-col justify-center">
              <h3 class="wp-block-heading text-xl font-medium text-gray-800 mb-2">Laneige Cream Skin Toner & Moisturizer</h3>
              <p class="text-gray-600 mb-4"><strong>20% off – $28.80</strong> at Amazon (Orig. $36)</p>
              <p class="text-gray-600 mb-4">A two-in-one cream-toner hybrid with peptides and ceramides for smooth, balanced, and hydrated skin.</p>
              <div class="wp-block-buttons is-content-justification-center">
                <a class="wp-block-button__link bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition" href="https://zdcs.link/b1ALe?u=https://www.retailmenot.com/blog/best-laneige-prime-day-deals.html" target="_blank" rel="noreferrer noopener">Shop Now</a>
              </div>
            </div>
          </div>
        </section>
      `,
    },
  ]

  const LIST_POST = [
    {
      post_id: '1',
      post_title: 'Best Prime Day Tech Deals to Shop Right Now',
      post_published_date: 'Published June 19, 2025',
      post_image: '/images/tech-prime-day-deals-1363-x-807-px-367x280.webp',
      post_category: 'Tech',
      post_category_image: '/images/blog-news.webp',
      post_slug: 'best-laneige-prime-day-deals',
    },
    {
      post_id: '2',
      post_title: '12 Best Prime Day Home Deals to Shop Right Now',
      post_published_date: 'Published June 18, 2025',
      post_image: '/images/home-prime-day-deals-367x280.webp',
      post_category: 'Home',
      post_category_image: '/images/blog-news.webp',
      post_slug: 'best-laneige-prime-day-deals',
    },
    {
      post_id: '3',
      post_title: 'Our 16 Favorite Amazon Prime Day Deals (So Far)',
      post_published_date: 'Published June 17, 2025',
      post_image: '/images/sharp-367x280.webp',
      post_category: 'Deals',
      post_category_image: '/images/blog-news.webp',
      post_slug: 'best-laneige-prime-day-deals',
    },
    {
      post_id: '4',
      post_title: 'Our 16 Favorite Amazon Prime Day Deals (So Far)',
      post_published_date: 'Published June 17, 2025',
      post_image: '/images/sharp-367x280.webp',
      post_category: 'Deals',
      post_category_image: '/images/blog-news.webp',
      post_slug: 'best-laneige-prime-day-deals',
    },
    {
      post_id: '5',
      post_title: 'Our 16 Favorite Amazon Prime Day Deals (So Far)',
      post_published_date: 'Published June 17, 2025',
      post_image: '/images/sharp-367x280.webp',
      post_category: 'Deals',
      post_category_image: '/images/blog-news.webp',
      post_slug: 'best-laneige-prime-day-deals',
    },
    {
      post_id: '6',
      post_title: 'Our 16 Favorite Amazon Prime Day Deals (So Far)',
      post_published_date: 'Published June 17, 2025',
      post_image: '/images/sharp-367x280.webp',
      post_category: 'Deals',
      post_category_image: '/images/blog-news.webp',
      post_slug: 'best-laneige-prime-day-deals',
    },
  ]

  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  return (
    <div className="mt-10">
      <div className="mx-auto max-w-[1162px]">
        <div className="flex flex-col gap-[30px] md:flex-row">
          <div className="w-full lg:w-2/3">
            {post ? (
              <>
                <section className="">
                  <div className="relative px-8 py-6">
                    <h1 className="text-5xl leading-16 font-bold text-[#323232]">
                      {post.post_title}
                    </h1>
                    <div className="mt-2 text-sm">
                      <Link
                        href=""
                        className="hover:text-green font-bold uppercase transition-all duration-300 ease-out"
                        style={{ letterSpacing: '2px' }}
                      >
                        {post.post_category}
                      </Link>
                      <span className="px-2">·</span>
                      <span className="text-gray-600">
                        {post.post_published_date}
                      </span>
                      <span className="px-2">·</span>
                      <span className="text-gray-600">
                        By{' '}
                        <Link
                          href=""
                          className="hover:text-green font-semibold text-black transition-all duration-300 ease-out"
                        >
                          {post.post_author}
                        </Link>
                      </span>
                    </div>
                    <span className="absolute size-[42px] rounded-full shadow-md">
                      <img
                        width="160"
                        height="160"
                        src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2024/12/Blog-Beauty.png"
                        alt="Beauty Category Icon"
                      />
                    </span>
                  </div>
                </section>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </>
            ) : (
              <div>
                <h1>Post Not Found</h1>
                <p>
                  Sorry, the blog post with slug $`{slug}` could not be found.
                </p>
              </div>
            )}
          </div>
          <div className="hidden w-full md:w-1/3 lg:block">
            <div className="flex flex-col">
              <h5 className="text-olive-green mb-[18px] text-lg font-bold tracking-widest uppercase">
                Trending
              </h5>
              <TrendingPost posts={POST_PREVIEWS} />
            </div>
          </div>
        </div>
        <div className="my-10">
          <CategoryHeader title="Read More" href="/" />
          <ListPost posts={LIST_POST} />
        </div>
      </div>
    </div>
  )
}
