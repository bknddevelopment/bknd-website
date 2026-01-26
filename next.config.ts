import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/bknd-website',
  assetPrefix: '/bknd-website/',
};

export default nextConfig;
