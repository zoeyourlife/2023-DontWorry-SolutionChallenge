/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [''],
    },
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;
