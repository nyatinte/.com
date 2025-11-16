import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // TOOD: 自前でホスティングしていくので、そのうち変更する
        hostname: "cdn.shadcnstudio.com",
      },
    ],
  },
};

export default nextConfig;
