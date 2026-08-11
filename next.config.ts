import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  turbopack: {
    root: '/Users/onuraydin/Documents/antigravity/agitated-kepler',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ozyegin.edu.tr',
      },
    ],
  },
};

export default nextConfig;
