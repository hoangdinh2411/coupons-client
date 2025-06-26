import '../styles/global.scss'
import { Metadata } from 'next'
import { METADATA } from '@/helpers/config'
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
      countryName: 'Sweden',
      emails: METADATA.CONTACT_EMAIL,
      locale: 'sv_SE',
      type: 'website',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/images/favicon-16x16.png',
      apple: '/images/favicon-16x16.png',
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
        {/* ===== Open Graph Meta Tags ===== */}
        {/* <meta property="og:site_name" content={METADATA.NAME} />
        <meta property="og:title" content={METADATA.OG.TITLE} />
        <meta property="og:description" content={METADATA.OG.DESCRIPTION} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content={`${METADATA.APP_URL}/images/opengraph-image.png`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:country_name" content="Sweden" /> */}
        {/* Đảm bảo URL này trỏ tới trang chủ hoặc trang bạn muốn share */}
        {/* <meta property="og:url" content={METADATA.APP_URL} /> */}
        {/* ✅ Google Tag Manager (head) */}
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
