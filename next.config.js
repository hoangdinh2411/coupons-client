/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: true,
  experimental: {
    authInterrupts: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
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
