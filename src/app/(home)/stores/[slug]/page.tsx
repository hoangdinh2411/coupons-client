import { getStoreBySlug } from '@/services/storeApi'
import { notFound } from 'next/navigation'
import React from 'react'
import CouponList from './CouponList'
import FAQs from './FAQs'
import { StoreData } from '@/types/store.type'
import TopSplide from './TopSplide'
import BrandImg from './BrandImg'
import StoreInfo from './StoreInfo'
import DescriptionStore from './DescriptionStore'
import OffersTable from './OffersTable'
const STORES: Partial<StoreData> = {
  created_at: '2025-07-05T01:20:00.068Z',
  updated_at: '2025-07-06T01:50:37.624Z',
  deleted_at: null,
  meta_data: {
    title: '20% Off eBay Coupons, Promo Codes + 1% Cash Back 2025',
    description: '20% Off eBay Coupons, Promo Codes + 1% Cash Back 2025',
    keywords: ['ebay'],
    image:
      'https://res.cloudinary.com/coupon-project/image/upload/v1751678278/stores/h7cjxyb6vy8km7c96zmn.jpg',
    slug: '/stores/ebay.com',
  },
  id: 7,
  name: 'Ebay.com',
  image: {
    url: 'https://res.cloudinary.com/coupon-project/image/upload/v1751678278/stores/h7cjxyb6vy8km7c96zmn.jpg',
    file_name: 'ebay_store.undefined',
    public_id: 'stores/h7cjxyb6vy8km7c96zmn',
  },
  description:
    '<h2 style="text-align: left"><strong>About eBay</strong></h2><p style="text-align: left">eBay is an online marketplace where you can buy and sell practically anything, often at competitive prices or through exciting auction formats. Its vast selection, from rare collectibles to brand-new items, makes it a go-to platform for shoppers and sellers worldwide. Founded in 1995 by Iranian-American computer programmer Pierre Omidyar, eBay was the first online auction site to allow person-to-person transactions. At present, individuals and businesses in over 190 countries sell a wide range of goods and services to over 132 million buyers globally. Goods bought and sold on eBay include collectibles, appliances, décor, equipment, furnishings, domain names, and even vehicles.</p><p style="text-align: left"><br><strong>What pickup options does eBay offer?</strong></p><p style="text-align: left">eBay offers a local pickup option, particularly useful for large items, where sellers provide the opportunity for buyers to collect items in person instead of shipping them. Buyers can inspect the item before taking it home and save on shipping costs. After purchasing an item available for local pickup, buyers contact the seller to arrange a pickup time and payment method.</p><p style="text-align: left">Payment methods can include credit card, digital wallets, internet banking, check, money order, or cash. eBay sends a Local Pickup code (a QR code and a six-digit code) to the buyer\'s messages, which the seller scans or enters on the eBay app to confirm the pickup.</p><p style="text-align: left">Listings with local pickup can be found by selecting "free local pickup" in the search filters or using the advanced search to filter to see only local pickup listings.</p><p style="text-align: left">Buyers can contact sellers for more information about the pickup process, if needed. Items collected in person are still covered by eBay Money Back Guarantee under certain conditions.</p><p style="text-align: left"></p><h2 style="text-align: left"><strong>What is eBay\'s cancellation policy?</strong></h2><p style="text-align: left">To cancel an order on eBay, contact the seller and request cancellation, keeping in mind that the seller may accept or decline your request. If the seller has already shipped the order, cancellation may not be possible.</p><p style="text-align: left">If you made the purchase within the last hour and the seller hasn\'t shipped it, you can initiate a cancellation request through the Purchase history section. eBay will forward the request to the seller, who has three calendar days to respond. Confirmation of cancellation will be sent if the seller accepts.</p><p style="text-align: left">For orders made more than an hour ago, contact the seller via Purchase history, explaining the reason for cancellation. Note that you can\'t cancel an order if you\'ve reported nonarrival or requested a return. If the seller declines or has shipped the item, you\'ll need to wait for delivery and then start a return request, adhering to eBay\'s order cancellation policy for additional information.</p><p style="text-align: left"></p><h2 style="text-align: left"><strong>Does eBay have memberships, rewards, or loyalty programs?</strong></h2><p style="text-align: left">eBay has a comprehensive partner and affiliate network that enables shoppers to earn money by driving traffic and prompting sales on the site. Shoppers can refer other buyers to purchase products on eBay and earn a commission.</p><p style="text-align: left"></p><h2 style="text-align: left"><strong>What is eBay\'s price matching and adjustment policy?</strong></h2><p style="text-align: left">eBay\'s Best Price Guarantee ensures that customers receive the best prices for new and manufacturer-refurbished items available on eBay. With this guarantee, if a qualifying item is purchased on eBay and later found at a lower price on an approved competitor\'s website, eBay pledges to beat the price by offering 110% of the price difference.</p><p style="text-align: left">To take advantage of eBay\'s Best Price Guarantee, customers who have purchased an item within the last 48 hours and discovered a better price on an approved competitor\'s site can notify eBay\'s customer service team. For details, terms, and conditions, visit the Best Price Guarantee page on eBay.</p><p style="text-align: left"></p><h2 style="text-align: left"><strong>Does eBay offer buy now, pay later options?</strong></h2><p style="text-align: left">In addition to credit card and PayPal payment options, eBay offers buy now, pay later financing through Klarna and Affirm. To use Klarna at eBay, download the Klarna app and search for eBay. When you’re ready to checkout, go to the checkout page and press the “Pay with K” button to pay in four interest-free installments every two weeks. To use Affirm at eBay, download the Affirm app or sign in at Affirm.com to request a virtual card. When requesting your virtual card, you’ll let Affirm know how much you plan to spend at eBay and copy and paste the details to finish your purchase. You can use the Affirm app or website to make payments or set up autopay.</p><p style="text-align: left"></p><h2 style="text-align: left"><strong>What credit card offers are available at eBay?</strong></h2><p style="text-align: left">The eBay Mastercard, issued by Synchrony Bank, allows cardholders to earn reward points on their purchases. The amount of reward points earned depends on the total net purchases within specific categories, such as gas stations, grocery stores and restaurants. Other purchases made with the eBay Mastercard earn 1 reward point. These reward points can be redeemed for eligible purchases on eBay.com. Cardholders also have access to Mastercard benefits such as identity theft resolution and zero-liability protection.</p><p style="text-align: left"></p><h2 style="text-align: left"><strong>What are the best eBay sales and seasonal discounts?</strong></h2><p style="text-align: left"><strong>Black Friday and Cyber Monday sale:</strong> eBay runs sales across various categories during Cyber Monday and Black Friday. We\'ve seen deals on electronics, fashion, home goods and toys.</p><p style="text-align: left"><strong>Daily deals:</strong> Find limited time sales on cameras, smartphones, video games and consoles. Beauty products have discounts as big as 65% on sale days.</p><p style="text-align: left"><strong>Flash Sales:</strong> eBay holds flash sales on selected items, usually on random days.</p><p style="text-align: left"><strong>End of Season Sale:</strong> eBay also has end-of-season sales, depending on the season.</p><p style="text-align: left"></p><h2 style="text-align: left"><strong>What are the best ways to save more at eBay?</strong></h2><p style="text-align: left">The best way to save more at eBay is to sign up for an account and agree to receive marketing emails. You\'ll get the latest deals, coupons and offers sent directly to your inbox.</p><h4 style="text-align: left"><strong>New User Discount</strong></h4><p style="text-align: left">Shoppers may be eligible to receive a $5 eBay coupon code by registering a new eBay account. This code can be used on their first purchase from eBay. The coupon can be applied for purchases such as electronics, motor parts, mobile phone accessories, and more. The coupon is valid for 24 hours.</p><p style="text-align: left"></p><h2 style="text-align: left"><strong>About eBay</strong></h2><p style="text-align: left">eBay is an online marketplace where you can buy and sell practically anything, often at competitive prices or through exciting auction formats. Its vast selection, from rare collectibles to brand-new items, makes it a go-to platform for shoppers and sellers worldwide. Founded in 1995 by Iranian-American computer programmer Pierre Omidyar, eBay was the first online auction site to allow person-to-person transactions. At present, individuals and businesses in over 190 countries sell a wide range of goods and services to over 132 million buyers globally. Goods bought and sold on eBay include collectibles, appliances, décor, equipment, furnishings, domain names, and even vehicles.</p><p style="text-align: left"></p>',
  rating: 1,
  max_discount_pct: 30,
  keywords: ['ebay'],
  url: 'https://ebay.com',
  slug: 'ebay.com',
  coupons: [
    {
      created_at: '2025-07-05T01:21:42.527Z',
      updated_at: '2025-07-05T01:21:42.527Z',
      deleted_at: null,
      meta_data: null,
      id: 4,
      title: 'July 4th Deals! Take 20% Off Select Home, Tech, Fashion + More',
      code: 'JULYFINDS',
      offer_detail: '20% off, no min, $500 max, 2x use',
      offer_link:
        'https://www.ebay.com/e/daily-deals/25-rw27-july-4?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5336356065&customid=00UelFaMgm9bkFC2ckqgjGZ&toolid=10001&mkevt=1&pub=1524595',
      rating: 1,
      added_by: 1,
      type: 'Code',
      is_exclusive: true,
      start_date: '2025-07-04',
      expire_date: '2025-07-22',
      store_id: 7,
      is_verified: true,
    },
    {
      created_at: '2025-07-05T01:22:52.488Z',
      updated_at: '2025-07-05T01:22:52.488Z',
      deleted_at: null,
      meta_data: null,
      id: 5,
      title: '% Off Select Items',
      code: 'KLOTHCRAFTS2025',
      offer_detail:
        'Get 10% off on select items. Ensure to use the code provided during checkout. Applicable to select items only.',
      offer_link:
        'https://www.ebay.com/?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338483621&toolid=10001&mkevt=1&pub=1524595&customid=02pviHOm2edrbCoJRu4qrPl',
      rating: 1,
      added_by: 1,
      type: 'Code',
      is_exclusive: true,
      start_date: '2025-07-04',
      expire_date: '2025-07-16',
      store_id: 7,
      is_verified: true,
    },
    {
      created_at: '2025-07-05T01:23:33.927Z',
      updated_at: '2025-07-05T01:23:33.927Z',
      deleted_at: null,
      meta_data: null,
      id: 6,
      title: 'Save Up to 70% Off with eBay Promo Codes',
      code: 'Featured Deal Coupons',
      offer_detail:
        'Shop 1000s of eBay featured deals and get coupons you can apply at checkout.',
      offer_link:
        'https://www.ebay.com/globaldeals?mkpid=&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5336356065&customid=0732lWOxXkjMeiTESbQ1e7x&toolid=10001&pub=1524595',
      rating: 1,
      added_by: 1,
      type: 'Code',
      is_exclusive: true,
      start_date: '2025-07-04',
      expire_date: '2025-07-21',
      store_id: 7,
      is_verified: true,
    },
    {
      created_at: '2025-07-05T01:25:10.469Z',
      updated_at: '2025-07-05T01:25:10.469Z',
      deleted_at: null,
      meta_data: null,
      id: 7,
      title: 'July Deals! Up to 60% Off Top Tech, Fashion, Home + More!',
      code: 'Start Shopping',
      offer_detail:
        'No coupon code needed. Prices as marked. Tap to shop the sale now.',
      offer_link:
        'https://www.ebay.com/globaldeals?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5336356065&customid=065txghOailkZVBRIztxgef&toolid=10001&pub=1524595',
      rating: 1,
      added_by: 1,
      type: 'Sale',
      is_exclusive: true,
      start_date: '2025-07-04',
      expire_date: '2025-07-30',
      store_id: 7,
      is_verified: true,
    },
    {
      created_at: '2025-07-05T01:26:00.339Z',
      updated_at: '2025-07-05T01:26:00.339Z',
      deleted_at: null,
      meta_data: null,
      id: 8,
      title: 'Featured Deals! Up to 50% Off Fashion, Tech, Home & More',
      code: 'Sale',
      offer_detail:
        'No coupon code needed. Prices as marked. Tap to shop the sale now.',
      offer_link:
        'https://www.ebay.com/globaldeals/featured?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5336356065&customid=05Uwz8h4EBLRAQxlc69v6v6&toolid=10001&pub=1524595',
      rating: 1,
      added_by: 1,
      type: 'Sale',
      is_exclusive: true,
      start_date: '2025-07-04',
      expire_date: '2025-07-14',
      store_id: 7,
      is_verified: true,
    },
  ],
  categories: [
    {
      created_at: '2025-07-04T10:55:23.854Z',
      updated_at: '2025-07-04T10:55:23.854Z',
      deleted_at: null,
      meta_data: {
        title: 'Clothing - TrustCoupon.Com',
        keywords: [],
        description: 'Clothing - TrustCoupon.Com',
      },
      id: 7,
      name: 'Clothing',
      slug: 'clothing',
      image: {
        url: 'https://res.cloudinary.com/coupon-project/image/upload/v1751626510/categories/loby7upe5a48ait4frf6.jpg',
        file_name: 'Clothing.undefined',
        public_id: 'categories/loby7upe5a48ait4frf6',
      },
    },
    {
      created_at: '2025-07-04T10:56:21.719Z',
      updated_at: '2025-07-04T10:56:21.719Z',
      deleted_at: null,
      meta_data: {
        title: 'Flowers - TrustCoupon.Com',
        keywords: [],
        description: 'Flowers - TrustCoupon.Com',
      },
      id: 8,
      name: 'Flowers',
      slug: 'flowers',
      image: {
        url: 'https://res.cloudinary.com/coupon-project/image/upload/v1751626574/categories/dawx86fw0pfd9anbvpr7.jpg',
        file_name: 'Flowers.undefined',
        public_id: 'categories/dawx86fw0pfd9anbvpr7',
      },
    },
  ],
}

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params
  const res = await getStoreBySlug(slug)
  // const storeDetail: Partial<StoreData> | null = res.data ?? null
  if (!res.success || !res.data) {
    return notFound()
  }
  return (
    <div>
      <TopSplide />{' '}
      <div className="absolute right-0 left-0 hidden min-h-16 py-6 shadow-sm lg:block lg:bg-white">
        <div className="mx-auto flex max-w-(--max-width) gap-10">
          <div className="bg-white lg:w-92 xl:w-[368px]">.</div>
          <div className="">
            <p className="font-sans-bold mb-3 hidden items-center self-center text-xl leading-tight font-extrabold [grid-area:heading] lg:mt-1 lg:-mb-3 lg:flex lg:items-center lg:self-start lg:pl-0 lg:text-4xl">
              {STORES?.name} {' Coupons & promo codes'}
            </p>
            <p className="mt-4 text-sm font-[600] tracking-wider uppercase">
              Top offers for July, 12th 2025
            </p>
          </div>
        </div>
      </div>
      <section className="mx-auto flex max-w-(--max-width) flex-col gap-4 lg:flex-row lg:gap-14 xl:gap-20">
        <div className="z-20 lg:block lg:h-32">
          <BrandImg
            name={STORES?.name}
            image={STORES?.image}
            url={STORES?.url ?? ''}
            className=""
          />
          <StoreInfo className="hidden lg:block" />
        </div>

        <section className="mt-2 w-full lg:mt-36">
          <p className="mt-2 mb-2 block text-[12px] font-[600] tracking-wider uppercase lg:hidden">
            Top offers for July, 12th 2025
          </p>
          <CouponList coupons={STORES?.coupons ?? []} />
          <OffersTable />
          <StoreInfo className="block lg:hidden" />
          <DescriptionStore description={STORES?.description} />

          <FAQs />
        </section>
      </section>
    </div>
  )
}
