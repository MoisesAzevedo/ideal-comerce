/**
 * Hook: useResponsiveLayout
 * Responsabilidade única: Gerenciar layout responsivo do grid de produtos
 * baseado nos breakpoints do Tailwind e contexto da página
 */

"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface ResponsiveLayoutConfig {
  /** Configuração customizada para página específica */
  pageSpecificItems?: number;
  /** Forçar um número específico de itens (sobrescreve responsividade) */
  forceItems?: number;
}

interface ResponsiveBreakpoints {
  xs: number;      // 350px
  phone: number;   // 480px
  sm700: number;   // 700px
  tablet: number;  // 768px
  desktop: number; // 1024px
  lg: number;      // 1050px
  wide: number;    // 1250px
  xl: number;      // 1280px
  xxl: number;     // 1536px
}

/**
 * Hook que determina quantos itens por linha exibir
 * baseado na largura da tela e configurações específicas
 */
export function useResponsiveLayout(config: ResponsiveLayoutConfig = {}) {
  const pathname = usePathname();
  const isProductPage = pathname?.startsWith('/produto/');

  // Função para determinar itens por linha baseado nos breakpoints especificados
  const getItemsPerRow = React.useCallback(() => {
    if (typeof window === 'undefined') {
      // SSR fallback - usa valor padrão baseado na página
      return isProductPage && config.pageSpecificItems ? config.pageSpecificItems : 4;
    }

    // Se forçar um número específico, usa ele
    if (config.forceItems) {
      return config.forceItems;
    }

    const width = window.innerWidth;

    // Para páginas de produto específico, usa configuração especial
    if (isProductPage && config.pageSpecificItems) {
      // Mantém a responsividade mas ajusta para a página
      if (width < 350) return 1;      // até xs: 1 coluna
      if (width < 480) return 1;      // até phone: 1 coluna
      if (width < 700) return 2;      // até sm700: 2 colunas
      if (width < 768) return 3;      // até tablet: 3 colunas
      if (width < 1024) return 2;     // até desktop: 2 colunas
      if (width < 1050) return 2;     // até lg: 2 colunas
      if (width < 1250) return 3;     // até wide: 3 colunas
      if (width < 1280) return config.pageSpecificItems; // até xl: usa valor específico da página
      return config.pageSpecificItems; // xl+: forma padrão
    }

    // Para outras rotas, usa configuração padrão
    if (width < 350) return 1;      // até xs: 1 coluna
    if (width < 480) return 1;      // até phone: 1 coluna
    if (width < 700) return 2;      // até sm700: 2 colunas
    if (width < 768) return 3;      // até tablet: 3 colunas
    if (width < 1024) return 2;     // até desktop: 2 colunas
    if (width < 1050) return 2;     // até lg: 2 colunas
    if (width < 1250) return 3;     // até wide: 3 colunas
    if (width < 1280) return 4;     // até xl: forma padrão
    return 4;                       // xl+: forma padrão (4 colunas)
  }, [config.forceItems, config.pageSpecificItems, isProductPage]);

  // Estado para controlar o número de itens por linha
  const [itemsPerRow, setItemsPerRow] = React.useState(getItemsPerRow);

  // Atualiza o número de itens quando a tela redimensiona
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerRow(getItemsPerRow());
    };

    // Executa uma vez no mount para garantir valor correto
    setItemsPerRow(getItemsPerRow());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getItemsPerRow]);

  // Debug info (removível em produção)
  const debugInfo = {
    pathname,
    isProductPage,
    itemsPerRow,
    config,
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null
  };

  return {
    itemsPerRow,
    isProductPage,
    debugInfo
  };
}