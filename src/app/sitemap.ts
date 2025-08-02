import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: METADATA.APP_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.SIGN_IN,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.ALL_CATEGORIES,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.ALL_STORES,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.ALL_TOPICS,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.BLOGS,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.CHANGE_PASSWORD,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.FORGOT_PASSWORD,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.HOT_DEALS,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.MY_COUPONS,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.PROFILE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.SIGN_IN,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.SIGN_UP,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.SUBMIT_COUPON,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.VERIFY,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: METADATA.APP_URL + APP_ROUTERS.TERMS,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
