/**
 * Layout: SharedPageLayout
 * Responsabilidade única: Layout compartilhado para páginas principais (Header + Footer)
 */

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
}

export default function SharedPageLayout({ 
  children, 
  showTopFrame = false,
  showNavigation = true,
  className = "",
  banner
}: SharedPageLayoutProps) {
  return (
    <div data-name="shared-page-layout" className={`min-h-screen flex flex-col ${className}`}>
      {/* Frame de informações superiores (apenas para home) */}
      {showTopFrame && (
        <section data-name="top-frame-section">
          <Frame />
        </section>
      )}
      
      {/* Header */}
      <header data-name="main-header">
        <Header showNavigation={showNavigation} />
      </header>

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