"use client";

/**
 * Layout: SharedPageLayout
 * Responsabilidade única: Layout compartilhado para páginas principais (Header + Footer)
 */

import { useState, useEffect } from 'react';
import { Frame } from "../components/topInformation/componente";
import Header from "../components/Header/Header";
import FooterMenus from "../components/Footer/FooterMenus";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import styles from './SharedPageLayout.module.scss';

// Log para diagnosticar carregamento do layout
console.log('🎯 SharedPageLayout: Componente carregado');

interface SharedPageLayoutProps {
  children: React.ReactNode;
  showTopFrame?: boolean;
  showNavigation?: boolean;
  className?: string;
  banner?: React.ReactNode; // Banner que fica fora do container
  breadcrumb?: React.ReactNode; // Breadcrumb que fica logo abaixo do header
}

export default function SharedPageLayout({ 
  children, 
  showTopFrame = false,
  showNavigation = true,
  className = "",
  banner,
  breadcrumb
}: SharedPageLayoutProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const mainHeader = document.querySelector('[data-name="main-header"]') as HTMLElement;
      if (mainHeader) {
        const headerOffsetTop = mainHeader.offsetTop;
        const scrollY = window.scrollY;
        // Só fica sticky quando o scroll passou da posição original do header
        const shouldBeSticky = scrollY > headerOffsetTop;
        
        if (shouldBeSticky !== isSticky) {
          setIsSticky(shouldBeSticky);
          setHeaderHeight(mainHeader.offsetHeight);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);
  return (
    <div data-name="shared-page-layout" className={`min-h-screen flex flex-col ${className}`}>
      {/* Frame de informações superiores (apenas para home) */}
      {showTopFrame && (
        <section data-name="top-frame-section">
          <Frame />
        </section>
      )}
      
      {/* Header */}
      <header data-name="main-header" className={isSticky ? styles.sticky : ''}>
        <Header showNavigation={showNavigation} />
      </header>

      {/* Placeholder para evitar jump quando sticky é ativado */}
      {isSticky && (
        <div 
          className={styles.stickyPlaceholder}
          style={{ height: `${headerHeight}px` }}
        ></div>
      )}

      {/* Breadcrumb (logo abaixo do header) */}
      {breadcrumb && (
        <section data-name="breadcrumb-section" className="w-full border-b border-gray-200">
          <div className="px-4 py-2">
            {breadcrumb}
          </div>
        </section>
      )}

      {/* Banner (fora do container global) */}
      {banner && (
        <section data-name="banner-section">
          {banner}
        </section>
      )}

      {/* Conteúdo principal */}
      <main data-name="main-content" className="flex-1">
        <div className={styles.globalContainer}>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer data-name="main-footer">
        <FooterMenus />
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}