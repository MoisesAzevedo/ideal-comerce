/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/ideal-comerce',
  assetPrefix: '/ideal-comerce/',
  distDir: 'out',
}

module.exports = nextConfig
