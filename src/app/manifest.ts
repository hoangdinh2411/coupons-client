import { METADATA } from '@/helpers/config'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: METADATA.NAME,
    short_name: METADATA.SHORT_NAME,
    description: METADATA.DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#041221',
    theme_color: '#041221',
    id: '/',
    scope: '/',
    icons: [
      // {
      //   src: '/images/favicon-16x16.png',
      //   sizes: '16x16',
      //   type: 'image/png',
      // },
      // {
      //   src: '/images/favicon-32x32.png',
      //   sizes: '32x32',
      //   type: 'image/png',
      // },
      // {
      //   src: '/images/favicon-96x96.png',
      //   sizes: '96x96',
      //   type: 'image/png',
      // },
      // {
      //   src: '/images/favicon-128x128.png',
      //   sizes: '128x128',
      //   type: 'image/png',
      // },
      // {
      //   src: '/images/favicon-196x196.png',
      //   sizes: '196x196',
      //   type: 'image/png',
      // },
    ],
    categories: METADATA.CATEGORIES,
    lang: 'en',
    screenshots: [
      // {
      //   src: '/images/screenshot-pc.png',
      //   sizes: '1280x720',
      //   type: 'image/png',
      // },
      // {
      //   src: '/images/screenshot-mobile.png',
      //   sizes: '720x1280',
      //   type: 'image/png',
      // },
    ],
  }
}
