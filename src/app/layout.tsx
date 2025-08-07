import '../styles/global.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Metadata } from 'next'
import { METADATA } from '@/helpers/config'
import ToastProvider from '@/context/ToastProvider'
import ModalCoupon from '@/components/modal/ModalCoupon'
import { Suspense } from 'react'
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
    },

    // --- Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: METADATA.OG.TITLE,
      description: METADATA.OG.DESCRIPTION,
      images: ['/twitter-image.png'],
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
      lang="en"
      className={`${aptos.variable} ${aptosDisplay.variable} ${aptosNarrow.variable}`}
    >
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
