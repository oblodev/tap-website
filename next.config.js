/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com", "external-vie1-1.xx.fbcdn.net"],
  },

  env: {
    FACEBOOK_ACCESS_TOKEN:
      "EAAG6Tvy6E40BAC9QTqsiBUZCsdlsZAP0jf0vN2IyB1WEWNyr7kkRyivA3p7uz9mPHTcZCdHoqJEJdgZAik2pE7c6tx4mQsfwwAj1uSecp34UTcFyZA7MRppyfHvYQo02RF1ExTw7EFwvMmFLG9ZCa6OgZACylagKq7mb8ZCqmP35ZCafTV42HxveoSQdeD3FBSyzj7hvaZCNHTNZAZBKSZAHZCxOyt",
  },
};

module.exports = nextConfig;
