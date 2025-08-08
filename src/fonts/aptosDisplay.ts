import localFont from 'next/font/local'

export const aptosDisplay = localFont({
  src: [
    { path: './woff2/Aptos-Display.woff2', weight: '400', style: 'normal' },
    {
      path: './woff2/Aptos-Display-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './woff2/Aptos-Display-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './woff2/Aptos-Display-Bold-Italic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-aptos-display',
  preload: true,
})
