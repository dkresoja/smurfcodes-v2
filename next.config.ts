import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.smurfcodes.com",
          },
        ],
        destination: "https://www.smurfcodes.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
