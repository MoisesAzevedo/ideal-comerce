const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/ideal-comerce' : '',
  assetPrefix: isGithubPages ? '/ideal-comerce/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: "out"
};

module.exports = nextConfig;
