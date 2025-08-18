import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import Image from 'next/image'
import TopDealList from './(home)/hot-deals/TopDealList'
import PromoSlider from './(home)/(home)/PromoSlider'
import BestDeals from './(home)/(home)/BestDeals'
import CategoryDealList from './(home)/(home)/CategoryDealList'
import ListSale from './(home)/(home)/ListSale'
import SpotlightList from './(home)/(home)/SpotlightList'
import { Fragment, Suspense } from 'react'
import PopularList from './(home)/(home)/PopularList'
import { getDataForHomePage } from '@/services/clientApi'

const FAQ = [
  {
    id: 1,
    question: 'How does TrustCoupon.com help me save money?',
    answer: `At TrustCoupon.com, we make saving money effortless. We provide a curated collection of verified coupons, promo codes, and deals from thousands of your favorite brands. Beyond just codes, our blog offers expert shopping tips, and our cash back program puts money right back into your pocket. We bring all the best ways to save into one place, so every offer you find is trustworthy and ready to use.`,
  },
  {
    id: 2,
    question: 'How do you ensure coupons are trustworthy?',
    answer: `Our name is our promise. Our commitment is to be your most trusted source for coupons. Every offer on our site goes through a rigorous process: our team of deal curators manually tests and verifies codes daily. Furthermore, our community plays a vital role by sharing their experiences. You can see success rates and feedback on many coupons, giving you the confidence that you're using a truly trustworthy deal.`,
  },
  {
    id: 3,
    question: 'Is TrustCoupon.com free to use?',
    answer: `Yes, it's always 100% free. We care about saving you money, and our service is designed to be accessible to everyone. We are supported by our retail partners, who may pay us a commission when you use our links to make a purchase. This comes at no extra cost to you and allows us to continue our mission of finding and verifying the best deals for our community.`,
  },
  {
    id: 4,
    question: 'How often do you add new deals?',
    answer: `Our team of deal curators works every single day to find and add new offers to our site. We are constantly updating existing deals and sourcing new, exclusive promo codes to ensure our collection is fresh and valuable. We recommend checking back often, especially during major holidays and sales events, to find the latest ways to save.`,
  },
  {
    id: 5,
    question: 'Can I submit a coupon that I found?',
    answer: (
      <>
        Absolutely! We encourage you to share the great deals you find. Our
        community is at the heart of what we do. If you have a working coupon
        code that you dont see on our site, please send it to us through our{' '}
        <Link href="/submit">Submit a Coupon</Link>. Our team will verify it,
        and if it works, well share it with everyone. Thank you for helping the
        entire TrustCoupon community save money!
      </>
    ),
  },
]

const BANNER_LIST = [
  {
    banner_id: '1',
    banner_title: 'Your Bonus is Here',
    banner_image: ['/images/top-banner-a1.webp', '/images/top-banner-a2.webp'],
    banner_link: '/',
    banner_description: 'Sign up for an account to get your first $5 bonus*',
  },
  {
    banner_id: '2',
    banner_title: 'Extra 40% Off at Checkout + Free Shipping',
    banner_image: ['/images/top-banner-b1.webp', '/images/top-banner-b2.webp'],
    banner_link: '/',
    banner_description: 'at Gap',
  },
  {
    banner_id: '3',
    banner_title: 'Your Bonus is Here',
    banner_image: ['/images/top-banner-c1.webp', '/images/top-banner-c2.webp'],
    banner_link: '/',
    banner_description: 'Sign up for an account to get your first $5 bonus*',
  },
]

const BEST_DEALS = [
  {
    deal_id: '1',
    deal_title: 'Best Deal',
    deal_image: '/images/best-deal.png',
    deal_link: '/',
  },
  {
    deal_id: '2',
    deal_title: 'Best Deal',
    deal_image: '/images/best-deal.png',
    deal_link: '/',
  },
  {
    deal_id: '3',
    deal_title: 'Best Deal',
    deal_image: '/images/best-deal.png',
    deal_link: '/',
  },
]

const SPOTLIGHT_LIST = Array.from({ length: 3 }, (_, i) => ({
  spotlight_id: `spotlight-${i + 1}`,
  spotlight_title: "Best Trader Joe's",
  spotlight_description: 'Beauty Dupes We Love',
  spotlight_image: '/images/anklet_hero-367x280.webp',
  spotlight_link: '/',
}))

export default async function LandingPage() {
  const res = await getDataForHomePage()

  const top_deals_today = res.data?.top_deal_today ?? []
  const top_deals = res.data?.top_deals ?? []

  console.log(top_deals_today)
  return (
    <Fragment>
      <Suspense
        fallback={<div className="h-[112px] bg-gray-50 lg:h-[122px]" />}
      >
        <Header />
      </Suspense>
      <main>
        <section>
          <PromoSlider bannerList={BANNER_LIST} />
        </section>
        <div className="mx-auto mt-10 w-full max-w-7xl px-4">
          <p className="mt-2 mb-12 text-center text-xs">
            When you buy through links on TrustCoupon{' '}
            <Link
              className="underline"
              href="https://trustcoupon.com/terms-of-use"
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
            <div className="relative aspect-[393/233] w-full bg-gray-200 drop-shadow md:w-2/3 md:drop-shadow-none">
              <Image
                src={'/images/banner-2.png'}
                alt="Shopping with trusted coupons - promotional banner"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-first w-full md:order-none md:mx-6 md:flex md:w-1/3 md:flex-col md:place-content-center md:py-1">
              <h2 className="mb-4 text-xl leading-tight font-bold capitalize md:mb-0 md:text-2xl md:leading-normal">
                Shopping Hits Different with a Trusted Coupon
              </h2>
              <p className="mt-2.5 hidden md:block">
                Experience the confidence of verified savings. Our curated
                collection of promo codes from thousands of US brands makes
                every purchase a smart one.
              </p>
            </div>
          </section>
          <div className="mb-16 md:mb-20">
            <Link
              href="/"
              className="flex items-center justify-between gap-8 rounded bg-white px-8 text-black shadow-md"
            >
              <div className="relative hidden aspect-[15/1] w-full sm:block">
                <Image
                  src="/images/dream_bar_1.webp"
                  alt="dream_bar_1"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 640px) 100vw"
                />
              </div>
              <div className="relative block aspect-[3/2] w-full sm:hidden">
                <Image
                  src="/images/dream_bar_2.webp"
                  alt="dream_bar_2"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 639px) 100vw"
                />
              </div>
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
            <ListSale top_deals={top_deals} />
          </section>
          <div className="lg:flex-ro flex flex-col bg-[#36c1d214] lg:space-x-2">
            <div className="w-full text-center">
              <Link href="/" className="mx-auto inline-block">
                <Image
                  className="mx-auto my-4 w-full"
                  src="/images/logo-with-text-and-green-logo.png"
                  alt="realdeal-logo"
                  width={280}
                  height={80}
                />
              </Link>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative w-full p-4 lg:w-2/3">
                <Link href="/">
                  <div className="relative mb-4 aspect-[1363/700] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/1200x600px.png"
                      alt="Beach Day - All On Sale promotional spotlight"
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(min-width: 1024px) 66vw, 100vw"
                    />
                  </div>
                  <div className="px-4">
                    <div className="mb-1 text-sm font-semibold uppercase">
                      Beach Day
                    </div>
                    <h3 className="mb-2 text-xl font-bold">All On Sale</h3>
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
          {/* Today top deal */}
          {top_deals_today && (
            <div className="mt-12">
              <div className="mx-auto max-w-[1280px] overflow-hidden">
                <div className="group relative cursor-auto">
                  <TopDealList top_deals_today={top_deals_today} />
                </div>
              </div>
            </div>
          )}
          <section className="mb-8 max-w-[1280px] pt-4 md:mb-10">
            <div className="mb-6 flex flex-wrap justify-between lg:mb-0">
              <h4 className="mb-4 text-xl leading-tight font-bold capitalize md:leading-normal">
                <Link href="/cashback">Top Deals</Link>
              </h4>
            </div>

            <ListSale top_deals={top_deals} />
          </section>
          <PopularList />
          <section className="mb-16 md:mb-20">
            <h5 className="mb-4 text-xl leading-tight font-bold capitalize md:leading-normal">
              3 Ways to Save with TrustCoupon
            </h5>
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
                  <div className="text-sm font-bold">VERIFIED PROMO CODES</div>
                  <div className="mb-4 text-sm tracking-normal normal-case">
                    Every code on our site is hand-tested by our team. Save with
                    confidence knowing our coupons are trustworthy and ready to
                    work at checkout.
                  </div>
                  <Link
                    className="mr-auto text-xs font-semibold tracking-widest uppercase underline decoration-gray-400 underline-offset-2"
                    href="/brands"
                  >
                    BROWSE ALL COUPONS
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
                  <div className="text-sm font-bold">CURATED DAILY DEALS</div>
                  <div className="mb-4 text-sm tracking-normal normal-case">
                    We discover and feature the hottest ongoing sales and offers
                    that don&#39t even require a code, so you never miss out on
                    a great price from your favorite brands.
                  </div>
                  <div className="flex">
                    <Link
                      className="mr-auto text-xs font-semibold tracking-widest uppercase underline decoration-gray-400 underline-offset-2"
                      href="/hot-deals"
                    >
                      SHOP TODAYS TOP DEALS
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
                  <div className="text-sm font-bold">SMART SHOPPING GUIDES</div>
                  <div className="mb-4 text-sm tracking-normal normal-case">
                    Learn to save like a pro with our expert tips and in-depth
                    guides for major events like Black Friday, Prime Day, and
                    more. We help you make every purchase a smart one.
                  </div>
                  <Link
                    href="/blogs"
                    className="mr-auto text-xs font-semibold tracking-widest uppercase underline decoration-gray-400 underline-offset-2"
                  >
                    READ OUR BLOG
                  </Link>
                </div>
              </li>
            </ul>
          </section>
          <section className="mb-16 md:mb-20">
            <h2 className="mb-8 text-xl leading-tight font-bold tracking-wider capitalize md:leading-normal">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-gray-200">
              {FAQ.map((faq) => (
                <details key={faq.id} className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between py-2 text-base font-medium hover:text-gray-700">
                    <span>{faq.question}</span>
                    <span className="transform text-gray-400 transition-transform group-open:rotate-90">
                      ▶
                    </span>
                  </summary>
                  <div className="pt-3 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
          <p className="prose mb-16 text-sm md:mb-20 md:w-full">
            Join a community of savvy shoppers who believe in never paying full
            price. At TrustCoupon.com, every deal is hand-tested and verified by
            our team and trusted members. Share your own finds, discover
            exclusive promo codes, and experience the confidence of using
            coupons that actually work. We care about your savings, and
            together, we make every purchase a smart one. <br />
            <br />
            Our commitment extends through every shopping season. Whether youre
            gearing up for the Holiday Season, hunting for Prime Day bargains,
            or just trying to save on your weekly groceries, our curators are on
            the lookout for the best discounts. We cover thousands of US
            retailers to ensure you have a trustworthy way to save, no matter
            the occasion. Stop searching and start saving effortlessly with
            TrustCoupon.
          </p>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}
