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

// Log para diagnosticar carregamento do layout
// debug log removed

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
        const scrollY = window.scrollY;
        // Verifica se está em tela tablet ou maior (768px+)
        const isTabletOrLarger = window.innerWidth >= 768;
        
        let shouldBeSticky;
        if (isTabletOrLarger) {
          // Para telas tablet+ usa o ponto específico de 21.09px
          const stickyTriggerPoint = 21.09;
          shouldBeSticky = scrollY > stickyTriggerPoint;
        } else {
          // Para mobile usa a posição original do header
          const headerOffsetTop = mainHeader.offsetTop;
          shouldBeSticky = scrollY > headerOffsetTop;
        }
        
        if (shouldBeSticky !== isSticky) {
          setIsSticky(shouldBeSticky);
          setHeaderHeight(mainHeader.offsetHeight);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Para recalcular em mudança de tela
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
      <header data-name="main-header" className={isSticky ? 'fixed top-0 left-0 right-0 z-[1000] shadow-lg transition-all duration-300 ease-in-out' : ''}>
        <Header showNavigation={showNavigation} />
      </header>

      {/* Placeholder para evitar jump quando sticky é ativado */}
      {isSticky && (
        <div 
          className="w-full"
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
        <div data-name="main-container" className="w-full mx-auto px-4 overflow-x-hidden lg:px-8 xl:px-0" style={{ maxWidth: '1185px' }}>
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