/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    authInterrupts: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [
      new URL('https://img.trustcoupon.com/**'),
      new URL('https://s3.amazonaws.com/img.trustcoupon.com/**'),
      new URL('https://res.cloudinary.com/coupon-project/image/**'),
    ],
  },
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
