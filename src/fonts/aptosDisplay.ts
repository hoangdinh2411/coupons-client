import localFont from 'next/font/local'

export const aptosDisplay = localFont({
  src: [
    { path: './ttf/Aptos-Display.ttf', weight: '400', style: 'normal' },
    { path: './ttf/Aptos-Display-Italic.ttf', weight: '400', style: 'italic' },
    { path: './ttf/Aptos-Display-Bold.ttf', weight: '700', style: 'normal' },
    {
      path: './ttf/Aptos-Display-Bold-Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-aptos-display',
  preload: true,
})
