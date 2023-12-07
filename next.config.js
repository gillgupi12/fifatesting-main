/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'server',
  // reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com"],
  },
};
module.exports = nextConfig
