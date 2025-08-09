import { CouponType } from '@/types/enum'

export const NAVBARS = [
  {
    link: '/',
    title: 'Top Picks',
    isBold: true,
  },
  {
    link: '/',
    title: 'Clothing, Shoes & Accessories',
  },
  {
    link: '/',
    title: 'Beauty & Health',
  },
  {
    link: '/',
    title: 'Home & Garden',
  },
  {
    link: '/',
    title: 'Sports, Fitness & Outdoors',
  },
  {
    link: '/',
    title: 'Laptops, Tech & Electronics',
  },
  {
    link: '/',
    title: 'Flights, Hotels & Travel',
  },
]
export const BLUR_PLACEHOLDER_HERO =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzMCIgaGVpZ2h0PSIxNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojMzc1M0FDOyI+PC9zdmc+'
export const EVENTS = [
  [
    'Summer Deals',
    'Prime Deals',
    'Back-To-School',
    'Labor Day',
    'Halloween',
    'Fall Deals',
    'Cash Back Day',
    'Veterans Day',
    'Black Friday',
  ],
  [
    'Cyber Monday',
    'Holiday Deals',
    'Christmas',
    "New Year's",
    'MLK Weekend',
    'Game Day',
    "Valentine's Day",
    "Presidents' Day",
    'Winter Clearance',
  ],
  [
    'Spring Savecation',
    'Tax Day',
    "Mother's Day",
    'Memorial Day',
    'Spring Deals',
    'Summer Checklist',
    "Father's Day",
  ],
]

export const CARDS = [
  {
    imgUrl: '/images/blog-card1.webp',
    title: "Best trader Joe's",
    description: 'Beauty Dupes We Love',
  },
  {
    imgUrl: '/images/blog-card2.webp',
    title: 'Shop now',
    description: 'Exceptional American-Made Brands',
  },
  {
    imgUrl: '/images/blog-card3.webp',
    title: 'Swimwear',
    description: 'Beyond the Bikini',
  },
]
export const COUPON_CARD = Array.from({ length: 5 }, (_, i) => ({
  id: `coupon-${i + 1}`,
  title: `CASPER`,
  description: 'July 4th Sale! Up to 70%',
  imgUrl: i % 2 ? `/images/brandCard.webp` : `/images/brandCard2.webp`,
  badgeIcon: i % 2 ? '/images/fire.svg' : '/images/cashback-bolt.svg',
  badgeTitle: '15% Off',
}))
export const STORE_LIST = Array.from({ length: 8 }, (_, i) => ({
  title: 'Cash Back',
  value: i + 2,
  link: '/',
  imgUrl: '/images/brandCard2.webp',
  icon: '/images/cashback-bolt.svg',
}))
export const TOP_DEALS_TODAY = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `CASPER Deal ${i + 1}`,
  code: '',
  offer_detail: 'July 4th Sale! Up to 70%',
  offer_link: 'https://example.com',
  store_id: 1,
  is_exclusive: false,
  expire_date: '2025-12-31',
  start_date: '2025-01-01',
  type: CouponType.SALE,
  rating: 4.5,
  discount: 15 + i * 5,
  added_by: 1,
  total_interested_users: 100 + i,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  deleted_at: '',
  store: {
    id: 1,
    name: i === 0 ? 'Amazon' : 'CASPER',
    description: 'Great deals and discounts',
    max_discount_pct: 70,
    keywords: ['deals', 'discounts'],
    url: 'https://example.com',
    slug: 'amazon',
    image: {
      file_name: 'store-image.webp',
      url: i % 2 ? `/images/brandCard.webp` : `/images/brandCard2.webp`,
      public_id: 'store-image',
    },
    rating: 4.5,
    coupons: [],
    faqs: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    deleted_at: '',
  },
}))
