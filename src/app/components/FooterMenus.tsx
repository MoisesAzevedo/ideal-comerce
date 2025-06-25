import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import styles from "./FooterMenus.module.scss";

const FooterMenus = () => (
  <section className={styles.footerMenus}>
    <div className={styles.menusWrapper}>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <span className={styles.menuTitle}>Institucional</span>
            <ul className={styles.submenu}>
              <li>
                <a href="/institucional/sobre">Sobre a Ideal Uniformes</a>
              </li>
              <li>
                <a href="/institucional/politica-de-privacidade">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/institucional/afiliados">Programa de Afiliados</a>
              </li>
              <li>
                <a href="/institucional/solucoes-corporativas">
                  Soluções Corporativas
                </a>
              </li>
              <li>
                <a href="/institucional/regulamentos">Regulamentos</a>
              </li>
              <li>
                <a href="/institucional/relatorios">Relatórios</a>
              </li>
              <li>
                <a href="/institucional/integridade">Programa de Integridade</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/institucional/lojasfisicas">Lojas Físicas</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <span className={styles.menuTitle}>Especiais</span>
            <ul className={styles.submenu}>
              <li>
                <a href="/especiais/uniformes">Uniformes</a>
              </li>
              <li>
                <a href="/especiais/promocao">Promoções</a>
              </li>
              <li>
                <a href="/especiais/industriais">Industriais</a>
              </li>
              <li>
                <a href="/especiais/escolares">Escolares</a>
              </li>
              <li>
                <a href="/especiais/empresariais">Empresariais</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <span className={styles.menuTitle}>Ajuda</span>
            <ul className={styles.submenu}>
              <li>
                <a href="/ajuda/trocas-e-devolucoes">Trocas e devoluções</a>
              </li>
              <li>
                <a href="/ajuda/entregas">Entregas</a>
              </li>
              <li>
                <a href="/ajuda/minha-conta">Minha Conta</a>
              </li>
              <li>
                <a href="/ajuda/meus-pedidos">Meus Pedidos</a>
              </li>
              <li>
                <a href="/ajuda/pagamentos">Pagamentos</a>
              </li>
              <li>
                <a href="/ajuda/cancelamentos">Cancelamentos</a>
              </li>
              <li>
                <a href="/ajuda/seguranca">Segurança &amp; Privacidade</a>
              </li>
              <li>
                <a href="/ajuda/como-comprar">Como Comprar</a>
              </li>
              <li>
                <a href="/ajuda/acessibilidade">Acessibilidade</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <span className={styles.menuTitle}>Central de Relacionamento</span>
            <ul className={styles.submenu}>
              <li>
                <a href="/ajuda">TIRE SUAS DÚVIDAS</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <span className={styles.menuTitle}>Central de vendas</span>
            <ul className={styles.submenu}>
              <li>(11) 4000-0000</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <div className={styles.socialMedia}>
          <a
            href="https://www.facebook.com/idealuniformes"
            aria-label="facebook"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://www.instagram.com/idealuniformes"
            aria-label="instagram"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://twitter.com/idealuniformes"
            aria-label="twitter"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={22} />
          </a>
          <a
            href="https://www.youtube.com/idealuniformes"
            aria-label="youtube"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={22} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FooterMenus;
