'use client';

import { X } from "@/icons";
import AccountButton from "../AccountButton/AccountButton";
import styles from "./NavigationSidebar.module.scss";

interface NavigationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationSidebar({ isOpen, onClose }: NavigationSidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
        data-name="sidebar-overlay"
      />

      {/* Sidebar */}
      <aside 
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        aria-label="Menu de navegação"
        data-name="navigation-sidebar"
      >
        {/* Header da Sidebar */}
        <div className={styles.sidebarHeader} data-name="sidebar-header">
          <div className={styles.headerLeft} data-name="header-left">
            <div className="accountButton">
              <AccountButton variant="sidebar" />
            </div>
            <h2 className={styles.categoriesTitle} data-name="categories-title">Categorias</h2>
          </div>
          
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar menu"
            data-name="close-button"
          >
            <X size={24} />
          </button>
        </div>

        {/* Conteúdo da Sidebar */}
        <div className={styles.sidebarContent} data-name="sidebar-content">
          <p data-name="hello-world-text">Hello World</p>
        </div>
      </aside>
    </>
  );
}
