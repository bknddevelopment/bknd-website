import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/bknd-website',
  assetPrefix: '/bknd-website/',
  trailingSlash: true,
};

export default nextConfig;
