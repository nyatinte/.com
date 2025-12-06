import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode - enabled by default in App Router
  reactStrictMode: true,

  // Standalone output for optimal Vercel deployment
  output: "standalone",

  // Image optimization for blog assets
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shadcnstudio.com",
      },
    ],
    // Modern image formats for better performance
    formats: ["image/avif", "image/webp"],
    // Cache images for improved performance
    unoptimized: false,
    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for security and SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects for old URLs (can be extended as needed)
  async redirects() {
    return [];
  },

  // Rewrites for API routes (can be configured as needed)
  async rewrites() {
    return [];
  },

  // Turbopack configuration for development
  turbopack: {
    resolveAlias: {},
  },

  // Experimental features for better performance
  experimental: {
    serverComponentsHmrCache: true,
  },
};

export default withMDX(nextConfig);
