import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "smart-flow-website.vercel.app",
          },
        ],
        destination: "https://nyvexo.lv/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
