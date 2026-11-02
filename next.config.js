/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
