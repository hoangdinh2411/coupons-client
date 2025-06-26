import { METADATA } from '@/helpers/config'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: METADATA.APP_URL + '/sitemap.xml',
  }
}
