import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    transitionIndicator: false,
  },
  async redirects() {
    return [
      { source: "/frameworks/:path*", destination: "/about/our-thinking", permanent: true },
      { source: "/products", destination: "/assessments", permanent: true },
      { source: "/services", destination: "/assessments", permanent: true },
      { source: "/our-thinking", destination: "/about/our-thinking", permanent: true },
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
