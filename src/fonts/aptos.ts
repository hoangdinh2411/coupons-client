import localFont from 'next/font/local'

export const aptos = localFont({
  src: [
    { path: './ttf/Aptos-Light.ttf', weight: '300', style: 'normal' },
    { path: './ttf/Aptos-Light-Italic.ttf', weight: '300', style: 'italic' },
    { path: './ttf/Aptos.ttf', weight: '400', style: 'normal' },
    { path: './ttf/Aptos-Italic.ttf', weight: '400', style: 'italic' },
    { path: './ttf/Aptos-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './ttf/Aptos-SemiBold-Italic.ttf', weight: '600', style: 'italic' },
    { path: './ttf/Aptos-Bold.ttf', weight: '700', style: 'normal' },
    { path: './ttf/Aptos-Bold-Italic.ttf', weight: '700', style: 'italic' },
    { path: './ttf/Aptos-ExtraBold.ttf', weight: '800', style: 'normal' },
    {
      path: './ttf/Aptos-ExtraBold-Italic.ttf',
      weight: '800',
      style: 'italic',
    },
    { path: './ttf/Aptos-Black.ttf', weight: '900', style: 'normal' },
    { path: './ttf/Aptos-Black-Italic.ttf', weight: '900', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-aptos',
  preload: true,
})
