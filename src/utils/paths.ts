// Configuração para paths de assets
export const getAssetPath = (path: string) => {
  // Check if we're in GitHub Pages environment
  const isGitHubPages =
    typeof window !== "undefined"
      ? window.location.hostname.includes("github.io")
      : process.env.GITHUB_ACTIONS === "true";

  // Check if we're in production build for GitHub Pages
  const isProductionForGitHub =
    process.env.NODE_ENV === "production" &&
    (process.env.GITHUB_ACTIONS === "true" || isGitHubPages);

  const basePath = isProductionForGitHub ? "/ideal-comerce" : "";
  return `${basePath}${path}`;
};
