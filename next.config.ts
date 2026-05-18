import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/app",
        destination: "https://app.pathowl.io",
        permanent: true,
      },
      {
        source: "/app/:path*",
        destination: "https://app.pathowl.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
