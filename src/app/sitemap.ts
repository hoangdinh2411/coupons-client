// pages/sitemap.xml.ts

import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { getAllCategoriesWithAllStores } from '@/services/categoryApi'
import { getTopics } from '@/services/topicApi'
import { StoreData } from '@/types/store.type'
import { GetServerSideProps } from 'next'
import { listLetters } from './(home)/brands/[letter]/StoreHeader'
import { getAllBlogs } from '@/services/blogApi'

const BASE_URL = METADATA.APP_URL // Thay bằng domain thật

// Các trang cố định
const staticUrls = [
  { loc: `${BASE_URL}${APP_ROUTERS.INDEX}`, lastmod: new Date().toISOString() },
  {
    loc: `${BASE_URL}${APP_ROUTERS.ACCOUNT}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.MY_COUPONS}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.PROFILE}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.ALL_CATEGORIES}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.ALL_STORES}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.ALL_TOPICS}`,
    lastmod: new Date().toISOString(),
  },
  { loc: `${BASE_URL}${APP_ROUTERS.BLOGS}`, lastmod: new Date().toISOString() },
  {
    loc: `${BASE_URL}${APP_ROUTERS.CHANGE_PASSWORD}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.FORGOT_PASSWORD}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SIGN_IN}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SIGN_OUT}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SIGN_UP}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.VERIFY}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.HOT_DEALS}`,
    lastmod: new Date().toISOString(),
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.POLICY}`,
    lastmod: new Date().toISOString(),
  },
  { loc: `${BASE_URL}${APP_ROUTERS.TERMS}`, lastmod: new Date().toISOString() },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SUBMIT_COUPON}`,
    lastmod: new Date().toISOString(),
  },
]

// Hàm lấy các trang động từ API hoặc DB
const getDynamicUrlsForTopics = async () => {
  const res = await getTopics() // hoặc từ CMS/DB
  const topics = res.data || []

  return topics.map((topic) => ({
    loc: `${BASE_URL}/topic/${topic.slug}`,
    lastmod: new Date(topic.updated_at).toISOString(),
  }))
}
const getDynamicUrlsForBlogs = async () => {
  const res = await getAllBlogs() // hoặc từ CMS/DB
  const blogs = res.data?.results || []

  return blogs.map((blog) => ({
    loc: `${BASE_URL}/blogs/${blog.slug}`,
    lastmod: new Date(blog.updated_at).toISOString(),
  }))
}
const getDynamicUrlsForBrancdsWithLetter = async () => {
  return listLetters.map((letter) => ({
    loc: `${BASE_URL}/brands/${letter}`,
    lastmod: new Date().toISOString(),
  }))
}
const getDynamicUrlsForCategories = async () => {
  const res = await getAllCategoriesWithAllStores() // hoặc từ CMS/DB
  const categories = res.data || []
  const stores = categories.reduce((acc: StoreData[], item) => {
    if (Array.isArray(item.stores)) {
      acc.push(...item.stores)
    }
    return acc
  }, [])
  const categoriesUrls = categories.map((c) => ({
    loc: `${BASE_URL}/coupons/${c.slug}`,
    lastmod: new Date(c.updated_at).toISOString(),
  }))
  const storesUrls =
    stores &&
    stores.map((store) => ({
      loc: `${BASE_URL}/stores/${store?.slug}`,
      lastmod: new Date(store.updated_at).toISOString(),
    }))

  return [...categoriesUrls, ...storesUrls]
}

const generateSitemapXml = (
  urls: { loc: string; lastmod: string }[],
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
`,
  )
  .join('')}
</urlset>`

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const topicUrls = await getDynamicUrlsForTopics()
  const categoriesAndStores = await getDynamicUrlsForCategories()
  const brands = await getDynamicUrlsForBrancdsWithLetter()
  const blogs = await getDynamicUrlsForBlogs()
  const allUrls = [
    ...staticUrls,
    ...topicUrls,
    ...categoriesAndStores,
    ...brands,
    ...blogs,
  ]
  const sitemap = generateSitemapXml(allUrls)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null // Trang này không render gì cả
}
