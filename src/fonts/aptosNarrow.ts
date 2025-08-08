import localFont from 'next/font/local'

export const aptosNarrow = localFont({
  src: [
    { path: './woff2/Aptos-Narrow.woff2', weight: '400', style: 'normal' },
    {
      path: './woff2/Aptos-Narrow-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    { path: './woff2/Aptos-Narrow-Bold.woff2', weight: '700', style: 'normal' },
    {
      path: './woff2/Aptos-Narrow-Bold-Italic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-aptos-narrow',
  preload: true,
})
