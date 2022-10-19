/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/:api*',
        destination: 'http://localhost:4500/:api*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
