// Configuração para paths de assets
export const getAssetPath = (path: string) => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/ideal-comerce" : "";
  return `${basePath}${path}`;
};
