/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['194.87.98.26'],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
