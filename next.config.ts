import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGitHubPages ? "/bknd-website" : "",
  assetPrefix: isGitHubPages ? "/bknd-website/" : "",
  trailingSlash: true,
};

export default nextConfig;
