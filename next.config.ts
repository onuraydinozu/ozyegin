import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

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
