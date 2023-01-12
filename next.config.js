/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com", "external-vie1-1.xx.fbcdn.net"],
  },
  env: {
    FACEBOOK_ACCESS_TOKEN: "@facebook-access-token",
  },
};

module.exports = nextConfig;
