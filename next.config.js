/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: true,
  swcMinify: true,
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
        source: '/((?!api).*)', 
        headers: [  
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400'
          }
        ]
      }
    ]
  },
  images: {
    remotePatterns: [
      new URL('https://s3.amazonaws.com/img.trustcoupon.com/**'),
      new URL('https://res.cloudinary.com/**'),
      new URL('https://img.trustcoupon.com/**'),
    ],
  },
}

module.exports = nextConfig
