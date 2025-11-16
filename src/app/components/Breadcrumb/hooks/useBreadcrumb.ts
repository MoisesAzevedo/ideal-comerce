'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BreadcrumbItem } from '../types';
import { getProductById } from '../../../../../db/data/products';

/**
 * Mapeamento de rotas para labels personalizados
 */
const routeLabels: Record<string, string> = {
  '': 'Início',
  'produtos': 'Produtos',
  'sapatos': 'Sapatos',
  'calcados': 'Calçados',
  'roupas': 'Roupas',
  'acessorios': 'Acessórios',
  'masculino': 'Masculino',
  'feminino': 'Feminino',
  'infantil': 'Infantil',
  'ofertas': 'Ofertas',
  'novidades': 'Novidades',
  'produto': 'Produto',
  'favoritos': 'Favoritos',
  'carrinho': 'Carrinho',
  'fale-conosco': 'Fale Conosco',
  'conta': 'Minha Conta',
  'perfil': 'Perfil',
  'pedidos': 'Meus Pedidos'
};

/**
 * Interface para opções do hook useBreadcrumb
 */
export interface UseBreadcrumbOptions {
  /** Excluir segmentos específicos */
  excludeSegments?: string[];
  /** Mapeamento personalizado de rotas */
  customLabels?: Record<string, string>;
  /** Nome do produto (se estiver em uma página de produto) */
  productName?: string;
  /** Categoria personalizada */
  customCategory?: string;
  /** Subcategoria personalizada */
  customSubcategory?: string;
}

/**
 * Hook personalizado para gerar breadcrumbs automaticamente baseado na rota atual
 * 
 * @param options - Opções de configuração
 * @returns Array de itens do breadcrumb
 * 
 * @example
 * ```tsx
 * // Uso básico
 * const breadcrumbItems = useBreadcrumb();
 * 
 * // Com nome do produto
 * const breadcrumbItems = useBreadcrumb({
 *   productName: 'Nike Air Max 90'
 * });
 * 
 * // Com categorias personalizadas
 * const breadcrumbItems = useBreadcrumb({
 *   customCategory: 'Calçados Esportivos',
 *   customSubcategory: 'Tênis de Corrida'
 * });
 * ```
 */
export const useBreadcrumb = (options: UseBreadcrumbOptions = {}): BreadcrumbItem[] => {
  const pathname = usePathname();
  
  const {
    excludeSegments = [],
    customLabels = {},
    productName,
    customCategory,
    customSubcategory
  } = options;

  const breadcrumbItems = useMemo(() => {
    // Combina labels padrão com personalizados
    const allLabels = { ...routeLabels, ...customLabels };
    
    // Remove a barra inicial e divide os segmentos
    const segments = pathname.split('/').filter(segment => 
      segment && !excludeSegments.includes(segment)
    );
    
    const items: BreadcrumbItem[] = [];
    let currentPath = '';
    
    // Tratamento especial para rota produto/[id]
    // Padrão: Início / Produtos / Nome do produto
    if (segments[0] === 'produto' && segments.length === 2) {
      // Adiciona "Produtos"
      items.push({
        label: 'Produtos',
        href: '/produtos'
      });
      
      // Adiciona Hello World hardcoded para debug
      items.push({
        label: 'Hello World',
        href: pathname
      });
      
      return items;
    }
    
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      
      // Verifica se é um ID de produto (geralmente numérico ou UUID)
      const isProductId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^\d+$/.test(segment);
      
      let label = segment;
      
      // Se é um ID de produto e temos um nome personalizado
      if (isProductId && productName) {
        label = productName;
      }
      // Se é uma categoria personalizada
      else if (segment === 'produtos' && customCategory) {
        // Adiciona categoria personalizada após produtos
        items.push({
          label: allLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
          href: currentPath
        });
        
        // Adiciona categoria personalizada
        items.push({
          label: customCategory,
          href: currentPath
        });
        
        // Se tem subcategoria, adiciona também
        if (customSubcategory) {
          items.push({
            label: customSubcategory,
            href: currentPath
          });
        }
        
        return;
      }
      // Usa label do mapeamento ou formata o segmento
      else {
        label = allLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      }
      
      // Adiciona o item ao breadcrumb
      items.push({
        label: label,
        href: currentPath
      });
    });
    
    return items;
  }, [pathname, excludeSegments, customLabels, productName, customCategory, customSubcategory]);
  
  return breadcrumbItems;
};

export default useBreadcrumb;