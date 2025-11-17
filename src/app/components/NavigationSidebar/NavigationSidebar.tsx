'use client';

import { X } from "@/icons";
import AccountButton from "../AccountButton/AccountButton";
import styles from "./NavigationSidebar.module.scss";
import Link from 'next/link';
import { categories } from '../../../../db/data/categories';

interface NavigationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationSidebar({ isOpen, onClose }: NavigationSidebarProps) {
  const mainCategories = categories
    .filter((c) => c.parent_id === null && c.is_active)
    .sort((a, b) => a.sort_order - b.sort_order);

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

        {/* Conteúdo da Sidebar - lista de cards de categorias */}
        <div className={styles.sidebarContent} data-name="sidebar-content">
          {mainCategories.map((cat) => (
            <div key={cat.id} className={styles.categoryCard} data-name={`category-${cat.slug}`}>
              <Link href={`/produtos?categories=${cat.id}`} className={styles.categoryCardLink} data-name={`category-link-${cat.slug}`} onClick={onClose}>
                {cat.name}
              </Link>

              {/* Subcategorias (se houver) */}
              {categories.filter(s => s.parent_id === cat.id && s.is_active).length > 0 && (
                <ul className={styles.subcategoryList}>
                  {categories
                    .filter(s => s.parent_id === cat.id && s.is_active)
                    .sort((a, b) => a.sort_order - b.sort_order)
                    .map((sub) => (
                      <li key={sub.id} className={styles.subcategoryItem} data-name={`subcategory-${sub.slug}`}>
                        <Link href={`/produtos?categories=${sub.id}`} className={styles.subcategoryLink} data-name={`subcategory-link-${sub.slug}`} onClick={onClose}>
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
