import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ozyegin.edu.tr',
      },
    ],
  },
};

export default nextConfig;
