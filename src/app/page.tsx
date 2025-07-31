import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import Image from 'next/image'
import TopDealList from './(home)/hot-deals/TopDealList'
import BaseAccordion from '../components/accordion/BaseAccordion'
import PromoSlider from './(home)/(home)/PromoSlider'
import BestDeals from './(home)/(home)/BestDeals'
import CategoryDealList from './(home)/(home)/CategoryDealList'
import ListSale from './(home)/(home)/ListSale'
import SpotlightList from './(home)/(home)/SpotlightList'
import { Fragment, Suspense } from 'react'
import PopularList from './(home)/(home)/PopularList'

const FAQ = [
  {
    name: 'RetailMeNot offers several ways for shoppers to save while shopping. We feature up-to-date coupon codes, free shipping offers, sales and promo codes for thousands of stores and restaurants.Plus, our ',
    slug: '/faq',
    id: 1,
  },
]

const BANNER_LIST = [
  {
    banner_id: '1',
    banner_title: 'Your Bonus is Here',
    banner_image: ['/images/banner_1.0.webp', '/images/banner_1.1.webp'],
    banner_link: '/',
    banner_description: 'Sign up for an account to get your first $5 bonus*',
  },
  {
    banner_id: '2',
    banner_title: 'Extra 40% Off at Checkout + Free Shipping',
    banner_image: ['/images/banner_2.0.webp', '/images/banner_2.1.webp'],
    banner_link: '/',
    banner_description: 'at Gap',
  },
  {
    banner_id: '3',
    banner_title: 'Your Bonus is Here',
    banner_image: ['/images/banner_1.0.webp', '/images/banner_1.1.webp'],
    banner_link: '/',
    banner_description: 'Sign up for an account to get your first $5 bonus*',
  },
]

const BEST_DEALS = [
  {
    deal_id: '1',
    deal_title: 'Best Deal',
    deal_image: '/images/best_deal_1.webp',
    deal_link: '/',
  },
  {
    deal_id: '2',
    deal_title: 'Best Deal',
    deal_image: '/images/best_deal_2.webp',
    deal_link: '/',
  },
  {
    deal_id: '3',
    deal_title: 'Best Deal',
    deal_image: '/images/best_deal_1.webp',
    deal_link: '/',
  },
]

const LIST_SALE = Array.from({ length: 10 }, (_, i) => ({
  id: `coupon-${i + 1}`,
  title: `CASPER`,
  description: 'July 4th Sale! Up to 70%',
  imgUrl: i % 2 ? `/images/brandCard.webp` : `/images/brandCard2.webp`,
  badgeIcon: i % 2 ? '/images/fire.svg' : '/images/cashback-bolt.svg',
  badgeTitle: '15% Off',
}))

const SPOTLIGHT_LIST = Array.from({ length: 3 }, (_, i) => ({
  spotlight_id: `spotlight-${i + 1}`,
  spotlight_title: "Best Trader Joe's",
  spotlight_description: 'Beauty Dupes We Love',
  spotlight_image: '/images/anklet_hero-367x280.webp',
  spotlight_link: '/',
}))

const BEST_DEAL = {
  id: `coupon`,
  title: `Today's Top Deals`,
  description: 'Presented by Amazon',
  imgUrl: `/images/brandCard.webp`,
  icon: '/images/cashback-bolt.svg',
  stringValueInfo: '3% Cash Back on Amazon Devices',
}

const TOP_DEAL_LIST = Array.from({ length: 8 }, (_, i) => ({
  id: `coupon-${i + 1}`,
  title: `CASPER`,
  description: 'July 4th Sale! Up to 70%',
  imgUrl: i % 2 ? `/images/brandCard.webp` : `/images/brandCard2.webp`,
  icon: i % 2 ? '/images/fire.svg' : '/images/cashback-bolt.svg',
  badgeTitle: '15% Off',
}))

export default function LandingPage() {
  return (
    <Fragment>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <section>
          <PromoSlider bannerList={BANNER_LIST} />
        </section>
        <div className="mx-auto mt-10 w-full max-w-7xl px-4">
          <p className="mt-2 mb-12 text-center text-xs">
            When you buy through links on RetailMeNot{' '}
            <Link
              className="underline"
              href="https://www.ziffdavis.com/terms-of-use"
              target="_blank"
            >
              we may earn a commission.
            </Link>
          </p>
          <section className="mb-16 md:mb-20">
            <h1 className="mb-4 text-xl leading-tight font-bold capitalize md:leading-normal">
              The Best Coupons, Promo Codes &amp; Cash Back Offers
            </h1>
            <BestDeals bestDeals={BEST_DEALS} />
          </section>
          <Suspense>
            <CategoryDealList />
          </Suspense>
          <section className="mb-12 flex flex-col md:mb-20 md:flex-row md:border md:border-gray-200 md:shadow-md">
            <div className="w-full bg-gray-200 drop-shadow md:w-2/3 md:drop-shadow-none">
              <Image
                src={'/images/amazon-prime-day-1.webp'}
                alt="amazon-prime-day-1"
                width={1000}
                height={1000}
                loading="lazy"
                className="size-full"
              />
            </div>
            <div className="order-first w-full md:order-none md:mx-6 md:flex md:w-1/3 md:flex-col md:place-content-center md:py-1">
              <h2 className="mb-4 text-xl leading-tight font-bold capitalize md:mb-0 md:text-2xl md:leading-normal">
                Shopping Hits Different When You RetailMeNot It
              </h2>
              <p className="mt-2.5 hidden md:block">
                Get exclusive member savings and automatically stack cash back
                on top of codes from 20,000 brands you love with RetailMeNot
              </p>
            </div>
          </section>
          <div className="mb-16 md:mb-20">
            <Link
              href="/"
              className="flex items-center justify-between gap-8 rounded bg-white px-8 text-black shadow-md"
            >
              <Image
                src={'/images/dream_bar_1.webp'}
                alt="dream_bar_1"
                width={2400}
                height={160}
                className="hidden sm:block"
                loading="lazy"
              />
              <Image
                src={'/images/dream_bar_2.webp'}
                alt="dream_bar_2"
                width={840}
                height={560}
                className="block sm:hidden"
                loading="lazy"
              />
            </Link>
          </div>
          <section className="mb-8 max-w-[1280px] pt-4 md:mb-10">
            <div className="mb-6 flex flex-wrap justify-between lg:mb-0">
              <h2 className="mb-4 text-xl leading-tight font-bold capitalize md:leading-normal">
                <Link href="/cashback">Summer Sales</Link>
              </h2>
              <Link
                href="/cashback"
                className="block text-xs font-semibold tracking-widest uppercase underline underline-offset-4"
              >
                All Cash Back
              </Link>
            </div>
            <ListSale listSale={LIST_SALE} />
          </section>
          <div className="lg:flex-ro flex flex-col bg-[#36c1d214] lg:space-x-2">
            <div className="w-full text-center">
              <Link href="/" className="mx-auto inline-block">
                <Image
                  className="mx-auto my-4 w-full"
                  src="/images/realdeal-logo.svg"
                  alt="realdeal-logo"
                  width={280}
                  height={80}
                />
              </Link>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative w-full p-4 lg:w-2/3">
                <Link href="/">
                  <div className="relative mb-4">
                    <Image
                      src="/images/spotlights.webp"
                      alt="spotlights"
                      width={1363}
                      height={700}
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4">
                    <div className="mb-1 text-sm font-semibold uppercase">
                      Beach Day
                    </div>
                    <h2 className="mb-2 text-xl font-bold">All On Sale</h2>
                    <p className="text-gray-600">
                      If you’re usually the one coordinating the beach day,
                      consider this your cheat sheet.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="w-full p-4 lg:w-1/3">
                <SpotlightList spotlights={SPOTLIGHT_LIST} />
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="mx-auto max-w-[1280px] overflow-hidden">
              <div className="group relative cursor-auto">
                <TopDealList bestDeal={BEST_DEAL} topDealList={TOP_DEAL_LIST} />
              </div>
            </div>
          </div>
          <section className="mb-8 max-w-[1280px] pt-4 md:mb-10">
            <div className="mb-6 flex flex-wrap justify-between lg:mb-0">
              <h2 className="mb-4 text-xl leading-tight font-bold capitalize md:leading-normal">
                <Link href="/cashback">Top Deals</Link>
              </h2>
              <Link
                href="/cashback"
                className="block text-xs font-semibold tracking-widest uppercase underline underline-offset-4"
              >
                All Deals
              </Link>
            </div>
            <ListSale listSale={LIST_SALE} />
          </section>

          <PopularList />
          <section className="mb-16 md:mb-20">
            <h2 className="mb-4 text-xl leading-tight font-bold capitalize md:leading-normal">
              3 Ways to Save With RetailMeNot
            </h2>
            <ul className="scrollbar-hide flex gap-x-6 overflow-x-auto">
              <li className="flex min-w-60 flex-col gap-y-6 lg:flex-row">
                <Image
                  className="mr-5 h-20 w-20 shrink-0"
                  src="/images/explainer-cashback.svg"
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                />
                <div className="flex h-full flex-col tracking-widest uppercase lg:block">
                  <div className="text-sm font-bold">Cha-ching</div>
                  <div className="mb-4 text-sm tracking-normal normal-case">
                    Cash back users earn up to 10% cash back per order
                  </div>
                  <Link
                    className="mr-auto text-xs font-semibold tracking-widest uppercase underline decoration-gray-400 underline-offset-2"
                    href="/cashback"
                  >
                    Browse Cash Back
                  </Link>
                </div>
              </li>
              <li className="flex min-w-60 flex-col gap-y-6 lg:flex-row">
                <Image
                  className="mr-5 h-20 w-20 shrink-0"
                  src="/images/explainer-app.svg"
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                />
                <div className="flex h-full flex-col tracking-widest uppercase lg:block">
                  <div className="text-sm font-bold">Save on the go</div>
                  <div className="mb-4 text-sm tracking-normal normal-case">
                    Get app-only offers and the best of RetailMeNot
                  </div>
                  <div className="flex">
                    <Link
                      className="mb-2 border-r border-r-black pr-4 text-xs font-semibold tracking-widest uppercase underline decoration-gray-400 underline-offset-2"
                      href=""
                    >
                      iOS
                    </Link>
                    <Link
                      className="mr-auto mb-2 ml-4 text-xs font-semibold tracking-widest uppercase underline decoration-gray-400 underline-offset-2"
                      href=""
                    >
                      Android
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex min-w-60 flex-col gap-y-6 lg:flex-row">
                <Image
                  className="mr-5 h-20 w-20 shrink-0"
                  src="/images/explainer-extension.svg"
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                />
                <div className="flex h-full flex-col tracking-widest uppercase lg:block">
                  <div className="text-sm font-bold">Save like magic</div>
                  <div className="mb-4 text-sm tracking-normal normal-case">
                    Automatically apply codes + cash back when you shop online
                  </div>
                  <Link
                    href=""
                    className="mr-auto text-xs font-semibold tracking-widest uppercase underline decoration-gray-400 underline-offset-2"
                  >
                    RetailMeNot ExtensioL
                  </Link>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-16 md:mb-20">
            <h2 className="normal mb-4 border-gray-200 pt-9 text-xl leading-tight font-bold tracking-wider capitalize md:leading-normal">
              Frequently Asked Questions
            </h2>
            <details className="group my-9 mt-9 border-b border-gray-200 pb-9">
              <BaseAccordion
                type="prose"
                data={FAQ}
                title="How can RetailMeNot save me money when shopping online?"
              />
            </details>
          </section>
          <p className="prose mb-16 text-sm md:mb-20 md:w-2/3">
            RetailMeNot helps you save money while shopping online and in-store
            at your favorite retailers. Whether you&apos;re looking for a promo
            code, a coupon, a free shipping offer or the latest sales,
            we&apos;re constantly verifying and updating our best offers and
            deals. Plus, we provide you with
            <Link target="_blank" className="text-green" href="/cashback">
              cash back
            </Link>{' '}
            offers to get a percentage of what you spend back in your pocket.
            For an even easier way to save,
            <Link
              target="_blank"
              className="text-green"
              href="https://www.retailmenot.com/extension"
            >
              our browser extension
            </Link>{' '}
            finds and automatically applies promo codes to your online shopping
            carts. Don&apos;t forget to check out our
            <Link target="_blank" className="text-green" href="/blog">
              blog
            </Link>{' '}
            for our editors&apos; pro shopping tips, the hottest sales, and the
            best products to buy.
          </p>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}
