const withPlugins = require('next-compose-plugins');
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
        source: '/stake/:slug*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/foundation/:slug*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/swap/:slug*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/treasury/:slug*',
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
const withTM = require('next-transpile-modules')(['react-d3-speedometer']);

module.exports = withPlugins([withTM], nextConfig); 
