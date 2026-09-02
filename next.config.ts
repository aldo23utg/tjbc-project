import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/landing-page',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
