import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    transitionIndicator: false,
  },
  async redirects() {
    return [{ source: "/snapshot", destination: "/get-started", permanent: true }];
  },
};

export default nextConfig;
