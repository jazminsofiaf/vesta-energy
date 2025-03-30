/**
 * @type {import('next').NextConfig}
 */

// Use this file to configure Next.js
// See the documentation for more detail:
// https://nextjs.org/docs/pages/api-reference/next-config-js

// Config for static export
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
