import { METADATA } from '@/helpers/config'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      METADATA.APP_URL + '/sitemap',
      METADATA.APP_URL + '/sitemap/blogs.xml',
      METADATA.APP_URL + '/sitemap/stores.xml',
      METADATA.APP_URL + '/sitemap/categories.xml',
      METADATA.APP_URL + '/sitemap/topics.xml',
    ],
  }
}
