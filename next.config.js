const isGithubPages = process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";
const isNetlify = process.env.NETLIFY === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração específica por plataforma
  ...(isGithubPages && { 
    output: "export",
    basePath: "/ideal-comerce",
    assetPrefix: "/ideal-comerce/",
    distDir: "out"
  }),
  
  // Para Netlify, manter configuração padrão para suportar API routes
  trailingSlash: !isNetlify, // Netlify não precisa de trailing slash
  images: {
    unoptimized: true // Necessário para ambas as plataformas
  }
};

module.exports = nextConfig;
