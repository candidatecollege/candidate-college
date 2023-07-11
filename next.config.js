/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.postimg.cc', 'blog.gojek.io'],
        unoptimized: true,
    },
    optimizeFonts: false,
}

module.exports = nextConfig
