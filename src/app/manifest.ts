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
      {
        src: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icons/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    categories: METADATA.CATEGORIES,
    lang: 'en',
  }
}
