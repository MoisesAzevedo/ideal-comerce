/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only apply basePath and assetPrefix for GitHub Pages deployment
  ...(process.env.NODE_ENV === "production" &&
    process.env.GITHUB_ACTIONS && {
      basePath: "/ideal-comerce",
      assetPrefix: "/ideal-comerce/"
    }),
  distDir: "out"
};

module.exports = nextConfig;
