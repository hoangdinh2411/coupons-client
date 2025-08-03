/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export',
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
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.retailmenot.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
