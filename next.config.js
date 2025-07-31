/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = __dirname; // this is correct as-is
    return config;
  },
};

module.exports = nextConfig;
