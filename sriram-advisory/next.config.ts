import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  outputFileTracingIncludes: { "/insights/*": ["./content/articles/*.mdx"], "/insights": ["./content/articles/*.mdx"], "/": ["./content/articles/*.mdx"] },
  async redirects() {
    return [
      { source: "/products", destination: "/assessments", permanent: true },
      { source: "/services", destination: "/work-with-sriram", statusCode: 301 },
      { source: "/our-thinking", destination: "/about/our-thinking", permanent: true },
      { source: "/snapshot", destination: "/tools/free-ai-exposure-check", permanent: true },
      { source: "/technology-digital-safety", destination: "/insights?topic=technology-digital-safety", permanent: true },
      { source: "/education", destination: "/insights?topic=education", permanent: true },
      { source: "/ai-champion", destination: "/ai-delivery-intelligence", permanent: true },
      {
        source: "/products/ai-champion-field-notes",
        destination: "/products/ai-delivery-field-notes",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default createMDX()(nextConfig);
