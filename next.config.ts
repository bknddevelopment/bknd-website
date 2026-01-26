import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // For GitHub Pages deployment, use basePath and assetPrefix:
  basePath: '/bknd-website',
  assetPrefix: '/bknd-website/',
  // For production deployment to bknddevelopment.com, remove or comment out basePath and assetPrefix:
  // basePath: '',
  // assetPrefix: '',
  trailingSlash: true,
};

export default nextConfig;
