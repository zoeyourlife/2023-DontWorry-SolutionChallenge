/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dontworry.duckdns.org", "storage.googleapis.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
