import '../styles/custom.css'
import '../styles/global.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Metadata } from 'next'
import { METADATA } from '@/helpers/config'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
const ToastProvider = dynamic(() => import('@/context/ToastProvider'))
const ModalCoupon = dynamic(() => import('@/components/modal/ModalCoupon'))
import { aptos } from '@/fonts/aptos'
import { aptosDisplay } from '@/fonts/aptosDisplay'
import { aptosNarrow } from '@/fonts/aptosNarrow'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `%s | ${METADATA.NAME}`,
      default: `${METADATA.NAME} - ${METADATA.TITLE}`,
    },
    description: METADATA.DESCRIPTION,

    metadataBase: new URL(METADATA.APP_URL),
    alternates: {
      canonical: '/',
    },
    robots: {
      index: false,
      follow: false,
      'max-image-preview': 'large',
      googleBot: {
        notranslate: true,
      },
    },

    openGraph: {
      title: METADATA.OG.TITLE,
      description: METADATA.OG.DESCRIPTION,
      url: '/',
      siteName: METADATA.NAME,
      locale: 'en_US',
      type: 'website',
      images: [`${METADATA.APP_URL}/opengraph-image.png`],
    },

    // --- Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: METADATA.OG.TITLE,
      description: METADATA.OG.DESCRIPTION,
      images: [`${METADATA.APP_URL}/twitter-image.png`],
    },

    // --- Icons & Manifest ---
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.webmanifest',
    other: {
      copyright: 'Copyright © 2025 TrustCoupon.com',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  //Schema Organization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: METADATA.NAME,
    url: METADATA.APP_URL,
    logo: `${METADATA.APP_URL}/logo.png`,
  }

  return (
    <html
      className={`${aptos.variable} ${aptosDisplay.variable} ${aptosNarrow.variable}`}
      lang="en"
    >
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              const modernFeatures = {
                modules: true,
                asyncAwait: true,
                optionalChaining: true,
                nullishCoalescing: true
              };
              window.__MODERN_BROWSER__ = true;
              window.__FEATURES__ = modernFeatures;
              performance.mark('modern-js-loaded');
            `,
          }}
        />

        <script
          noModule
          dangerouslySetInnerHTML={{
            __html: `
              window.__MODERN_BROWSER__ = false;
              if (window.performance && performance.mark) {
                performance.mark('legacy-js-loaded');
              }
            `,
          }}
        />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
        <link
          rel="preload"
          href="/_next/static/chunks/polyfills.js"
          as="script"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ToastProvider />
        <Suspense>
          <ModalCoupon />
        </Suspense>
      </body>
    </html>
  )
}
