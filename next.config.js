/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects()
  {
    return [
      {
        source: '/:path/:slug*',
        destination: '/',
        permanent: false,
      },
      // {
      //   source: '/',
      //   destination: '/stake?tab=overview',
      //   permanent: false,
      // },
    ]
  },
}

module.exports = nextConfig
