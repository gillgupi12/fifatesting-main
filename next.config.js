/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com"],
  },
};
module.exports = nextConfig
