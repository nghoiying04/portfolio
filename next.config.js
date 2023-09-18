/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true
  },
  experimental: {
    typedRoutes: true
  }
}

module.exports = nextConfig
