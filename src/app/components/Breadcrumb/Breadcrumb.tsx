'use client';

import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps, BreadcrumbItem } from './types';
import styles from './Breadcrumb.module.scss';

/**
 * Ícone de casa para o breadcrumb home
 */
const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Componente Breadcrumb para navegação hierárquica
 * 
 * @param items - Array de itens do breadcrumb
 * @param separator - Caractere separador (padrão: "/")
 * @param className - Classe CSS adicional
 * @param maxItems - Número máximo de itens visíveis
 * @param showHome - Se deve mostrar item de início
 * @param homeLabel - Texto do link de início
 * @param homeHref - URL do link de início
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  className = "",
  maxItems = 5,
  showHome = true,
  homeLabel = "Início",
  homeHref = "/"
}) => {
  // Processa os itens do breadcrumb
  const processedItems = React.useMemo(() => {
    let allItems: BreadcrumbItem[] = [];
    
    // Adiciona item de início se necessário
    if (showHome) {
      allItems.push({
        label: homeLabel,
        href: homeHref,
        isActive: false
      });
    }
    
    // Adiciona os itens fornecidos
    allItems = [...allItems, ...items];
    
    // Marca o último item como ativo
    if (allItems.length > 0) {
      allItems[allItems.length - 1].isActive = true;
    }
    
    // Se há muitos itens, trunca mantendo o primeiro, último e alguns do meio
    if (allItems.length > maxItems && maxItems > 2) {
      const firstItem = allItems[0];
      const lastItems = allItems.slice(-(maxItems - 2));
      
      return [
        firstItem,
        { label: "...", href: "", isActive: false },
        ...lastItems
      ];
    }
    
    return allItems;
  }, [items, showHome, homeLabel, homeHref, maxItems]);

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`${styles.breadcrumb} ${className}`}
      role="navigation"
    >
      <ol className="flex items-center gap-2">
        {processedItems.map((item, index) => {
          const isLast = index === processedItems.length - 1;
          const isEllipsis = item.label === "...";
          const isHome = index === 0 && showHome;
          
          return (
            <li key={`${item.href}-${index}`} className={styles.breadcrumbItem}>
              {/* Renderiza o item */}
              {isEllipsis ? (
                <span className={styles.breadcrumbEllipsis} aria-hidden="true">
                  {item.label}
                </span>
              ) : item.isActive ? (
                <span 
                  className={styles.breadcrumbActive}
                  aria-current="page"
                >
                  {isHome && (
                    <HomeIcon className={styles.homeIcon} />
                  )}
                  {!isHome && item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className={styles.breadcrumbLink}
                  title={`Navegar para ${item.label}`}
                >
                  {isHome && (
                    <HomeIcon className={styles.homeIcon} />
                  )}
                  {!isHome && item.label}
                </Link>
              )}
              
              {/* Renderiza o separador */}
              {!isLast && !isEllipsis && (
                <span className={styles.breadcrumbSeparator} aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;