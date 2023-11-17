/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    API_KEY: "live_6mxbLux5VNZ9OpuLJvSoRd7Xjv75gPdsZJKNda4k2yvGQ7woaOuucm3kGjtiKKby",
  },
};

module.exports = nextConfig;
