'use client';

import { useState } from "react";
import styles from "./Header.module.scss";
import SearchInput from "./local-components/SearchInput/SearchInput";
import UserActions from "./local-components/UserActions/UserActions";
import Navigation from "./local-components/Navigation/Navigation";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import { getAssetPath } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@/icons";

interface HeaderProps {
  showNavigation?: boolean;
}

export default function Header({ showNavigation = true }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className={styles.header} data-name="header">
        <div className={styles.content} data-name="header-content">
          {/* Burger Menu - Visível apenas em telas menores que tablet */}
          <button 
            className={styles.burgerMenu} 
            data-name="burger-menu"
            aria-label="Menu"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link href="/" className={styles.logoWrapper} data-name="link-home">
            <Image
              src={getAssetPath("/logo-mod.png")}
              alt="Ideal Logo"
              className={styles.logo}
              width={120}
              height={40}
              priority
              data-name="logo-image"
            />
          </Link>

          {/* Barra de pesquisa para telas maiores que tablet */}
          <div className={styles.desktopSearch} data-name="desktop-search">
            <SearchInput />
          </div>

          {/* Ações do Usuário */}
          <div className={styles.actionsContainer} data-name="user-actions">
            <UserActions />
          </div>

          {/* Conteúdo do header */}
        </div>
      </header>
      {/* Barra de pesquisa fora do header apenas para telas menores que tablet */}
      <div className={styles.mobileSearch}>
        <SearchInput />
      </div>
      
      {/* Navigation - Controlado pela prop showNavigation */}
      {showNavigation && <Navigation />}
      
      {/* Navigation Sidebar */}
      <NavigationSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
}
