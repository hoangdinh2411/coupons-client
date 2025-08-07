import localFont from 'next/font/local'

export const aptosNarrow = localFont({
  src: [
    { path: './ttf/Aptos-Narrow.ttf', weight: '400', style: 'normal' },
    { path: './ttf/Aptos-Narrow-Italic.ttf', weight: '400', style: 'italic' },
    { path: './ttf/Aptos-Narrow-Bold.ttf', weight: '700', style: 'normal' },
    {
      path: './ttf/Aptos-Narrow-Bold-Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-aptos-narrow',
  preload: true,
})
