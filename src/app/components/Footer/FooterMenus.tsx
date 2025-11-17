'use client';

import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import styles from "./FooterMenus.module.scss";

const FooterMenus = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section data-name="footer-menus" className={styles.footerMenus}>
    <div data-name="footer-menus-wrapper" className={styles.menusWrapper}>
      <div data-name="footer-menu-institucional" className={styles.menu}>
        <ul data-name="menu-list-institucional" className={styles.menuList}>
          <li data-name="menu-item-institucional" className={styles.menuItem}>
            <span data-name="menu-title-institucional" className={styles.menuTitle}>Institucional</span>
            <ul data-name="submenu-institucional" className={styles.submenu}>
              <li data-name="link-quem-somos">
                <a href="/quem-somos">Quem Somos</a>
              </li>
              <li data-name="link-fale-conosco">
                <a href="/fale-conosco">Fale Conosco</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div data-name="footer-menu-endereco" className={styles.menu}>
        <ul data-name="menu-list-endereco" className={styles.menuList}>
          <li data-name="menu-item-endereco" className={styles.menuItem}>
            <span data-name="menu-title-endereco" className={styles.menuTitle}>Endereço</span>
            <ul data-name="submenu-endereco" className={styles.submenu}>
              <li data-name="endereco-completo">Rua Serra Grande Nº 244, Uberlândia 38410394</li>
            </ul>
          </li>
        </ul>
      </div>
      <div data-name="footer-menu-vendas" className={styles.menu}>
        <ul data-name="menu-list-vendas" className={styles.menuList}>
          <li data-name="menu-item-vendas" className={styles.menuItem}>
            <span data-name="menu-title-vendas" className={styles.menuTitle}>Central de vendas</span>
            <ul data-name="submenu-vendas" className={styles.submenu}>
              <li data-name="telefone-vendas">
                <a 
                  href="https://wa.me/553484183311" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Clique para conversar no WhatsApp"
                  style={{ 
                    color: 'inherit', 
                    textDecoration: 'underline',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#25D366'}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  +55 (34) 8418-3311
                </a>
              </li>
              <li data-name="qrcode-whatsapp">
                <img 
                  src="/img/contact/QrCode-whats.png" 
                  alt="QR Code WhatsApp" 
                  style={{ width: '80px', height: '80px', marginTop: '8px' }}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div data-name="footer-menu-social" className={styles.menu}>
        <div data-name="social-media-container" className={styles.socialMedia}>
          <a
            data-name="social-facebook"
            href="https://www.facebook.com/idealuniformes"
            aria-label="facebook"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={22} />
          </a>
          <a
            data-name="social-instagram"
            href="https://www.instagram.com/idealuniformes"
            aria-label="instagram"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={22} />
          </a>
          <a
            data-name="social-twitter"
            href="https://twitter.com/idealuniformes"
            aria-label="twitter"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={22} />
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FooterMenus;
