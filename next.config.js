const isGithubPages = process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";
const isNetlify = process.env.NETLIFY === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Usar export estático apenas para GitHub Pages (Netlify suporta API routes)
  ...(isGithubPages && { output: "export" }),
  basePath: isGithubPages ? "/ideal-comerce" : "",
  assetPrefix: isGithubPages ? "/ideal-comerce/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true // GitHub Pages e Netlify precisam de imagens não otimizadas
  },
  distDir: "out"
};

module.exports = nextConfig;
