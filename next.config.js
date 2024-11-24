/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enables SWC compiler minification for better performance

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
