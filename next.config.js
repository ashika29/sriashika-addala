/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // styled-jsx is built in to Next.js, but we declare React 19 compat here.
  experimental: {
    optimizePackageImports: ["framer-motion", "lenis"],
  },
};

module.exports = nextConfig;
