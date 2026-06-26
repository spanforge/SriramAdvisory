import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    transitionIndicator: false,
  },
  async redirects() {
    return [
      { source: "/snapshot", destination: "/get-started", permanent: true },
      { source: "/ai-champion", destination: "/ai-delivery-intelligence", permanent: true },
      {
        source: "/products/ai-champion-field-notes",
        destination: "/products/ai-delivery-field-notes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
