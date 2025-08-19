// next.config.js
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "media.graphassets.com",
      "external-vie1-1.xx.fbcdn.net",
      "eu-central-1-shared-euc1-02.graphassets.com"
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};
