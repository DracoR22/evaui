import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@evaui/types', '@evaui/config']
};

export default withContentlayer(nextConfig)
