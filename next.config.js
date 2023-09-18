/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true
  },
  rewrites: [
    {
      source: "\\(!nextjs-github-pages\\)*",
      destination: "nextjs-github-pages*"
    }
  ],
  experimental: {
    typedRoutes: true
  }
}

module.exports = nextConfig
