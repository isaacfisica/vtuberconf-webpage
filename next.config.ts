import type { NextConfig } from "next";

// For GitHub Pages project sites the app is served from /<repo>/, so set
// NEXT_PUBLIC_BASE_PATH="/<repo>" at build time (the deploy workflow does this).
// Leave it unset for local dev / user-or-org pages / custom domains.
const basePath = '/vtuberconf-webpage';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath && { 
    basePath, 
    assetPrefix: basePath 
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
