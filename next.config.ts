import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.easychannel.it",
      },
      {
        protocol: "https",
        hostname: "images.seekda.net",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.hotelmignon.com",
      }
    ],
  },
};

export default nextConfig;
