/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com", "external-vie1-1.xx.fbcdn.net"],
  },
};

module.exports = nextConfig;
