import localFont from 'next/font/local'

export const aptos = localFont({
  src: [
    { path: './woff2/Aptos-Light.woff2', weight: '300', style: 'normal' },
    {
      path: './woff2/Aptos-Light-Italic.woff2',
      weight: '300',
      style: 'italic',
    },
    { path: './woff2/Aptos.woff2', weight: '400', style: 'normal' },
    { path: './woff2/Aptos-Italic.woff2', weight: '400', style: 'italic' },
    { path: './woff2/Aptos-SemiBold.woff2', weight: '600', style: 'normal' },
    {
      path: './woff2/Aptos-SemiBold-Italic.woff2',
      weight: '600',
      style: 'italic',
    },
    { path: './woff2/Aptos-Bold.woff2', weight: '700', style: 'normal' },
    { path: './woff2/Aptos-Bold-Italic.woff2', weight: '700', style: 'italic' },
    { path: './woff2/Aptos-ExtraBold.woff2', weight: '800', style: 'normal' },
    {
      path: './woff2/Aptos-ExtraBold-Italic.woff2',
      weight: '800',
      style: 'italic',
    },
    { path: './woff2/Aptos-Black.woff2', weight: '900', style: 'normal' },
    {
      path: './woff2/Aptos-Black-Italic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-aptos',
  preload: true,
})
