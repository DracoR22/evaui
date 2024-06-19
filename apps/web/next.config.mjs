import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@evaui/config', '@evaui/types'],
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    // Remove console.log from production except for error logs
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  async redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/marquee",
        permanent: true,
      },
      {
        source: "/components/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/marquee",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig)
