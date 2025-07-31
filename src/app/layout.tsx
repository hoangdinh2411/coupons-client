import '../styles/global.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Metadata } from 'next'
import { METADATA } from '@/helpers/config'
import ToastProvider from '@/context/ToastProvider'
import ModalCoupon from '@/components/modal/ModalCoupon'
import { Suspense } from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `%s | ${METADATA.NAME} - ${METADATA.TITLE}`,
      default: `${METADATA.NAME} - ${METADATA.TITLE}`,
    },
    description: METADATA.DESCRIPTION,
    applicationName: METADATA.NAME,
    generator: METADATA.NAME,
    keywords: METADATA.KEYWORDS,
    authors: [{ name: METADATA.NAME, url: METADATA.LINKEDIN_URL }],
    creator: METADATA.CREATOR,
    publisher: METADATA.PUBLISHER,
    metadataBase: new URL(METADATA.APP_URL),
    openGraph: {
      title: METADATA.OG.TITLE,
      description: METADATA.OG.DESCRIPTION,
      url: METADATA.APP_URL,
      siteName: METADATA.NAME,
      countryName: 'United State',
      emails: METADATA.CONTACT_EMAIL,
      locale: 'us_US',
      type: 'website',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/icon/favicon-16x16.png',
      apple: '/icon/favicon-16x16.png',
    },
    manifest: 'manifest.json',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="se">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <ToastProvider />
        <Suspense>
          <ModalCoupon />
        </Suspense>
      </body>
    </html>
  )
}
