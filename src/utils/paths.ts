// Configuração para paths de assets
export const getAssetPath = (path: string) => {
  // Check if we're in GitHub Pages environment
  const isGitHubPages =
    typeof window !== "undefined"
      ? window.location.hostname.includes("github.io")
      : process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_PAGES === "true";

  // In production and GitHub environment, use the base path
  const basePath = isGitHubPages ? "/ideal-comerce" : "";
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
};
