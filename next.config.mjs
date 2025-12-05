import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /** @see {@link <https://fumadocs.dev/docs/ui/components/codeblock>} */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shadcnstudio.com",
      },
    ],
  },
  turbopack: {
    resolveAlias: {},
  },
};

export default withMDX(nextConfig);
