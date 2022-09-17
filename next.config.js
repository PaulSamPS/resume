/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['176.113.83.209'],
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
