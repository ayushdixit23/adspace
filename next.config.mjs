/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['ad-s.s3.ap-south-1.amazonaws.com','dn3w8358m09e7.cloudfront.net'],
    },
    reactStrictMode: false,
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000, 
            aggregateTimeout: 300,
            ignored: ['**/node_modules', '**/.git'],
        };
        return config;
    },
    swcMinify: true,
};

export default nextConfig;
