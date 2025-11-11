import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FooterMenus = () => (
  <section data-name="footer-menus" className="bg-gray-100 py-6 phone:py-8 lg:py-12 mt-8 phone:mt-12">
    <div data-name="footer-container" className="max-w-6xl mx-auto px-4 phone:px-6 lg:px-8">
      <div data-name="footer-grid" className="grid grid-cols-1 phone:grid-cols-2 lg:grid-cols-4 gap-6 phone:gap-8">
        
        {/* Menu Institucional */}
        <div data-name="footer-institucional">
          <ul className="list-none p-0 m-0">
            <li className="mb-4">
              <span className="font-teko text-base phone:text-lg font-bold text-gray-800 uppercase tracking-wide">
                Institucional
              </span>
              <ul className="list-none p-0 m-0 mt-3">
                <li data-name="link-sobre" className="mb-2">
                  <a 
                    href="/institucional/sobre" 
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Sobre a Ideal Uniformes
                  </a>
                </li>
                <li data-name="link-privacidade" className="mb-2">
                  <a 
                    href="/institucional/politica-de-privacidade"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li data-name="link-afiliados" className="mb-2">
                  <a 
                    href="/institucional/afiliados"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Programa de Afiliados
                  </a>
                </li>
                <li data-name="link-solucoes" className="mb-2">
                  <a 
                    href="/institucional/solucoes-corporativas"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Soluções Corporativas
                  </a>
                </li>
                <li data-name="link-regulamentos" className="mb-2 hidden lg:block">
                  <a 
                    href="/institucional/regulamentos"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Regulamentos
                  </a>
                </li>
                <li data-name="link-blog" className="mb-2 hidden lg:block">
                  <a 
                    href="/blog"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Blog
                  </a>
                </li>
                <li data-name="link-lojas" className="mb-2">
                  <a 
                    href="/institucional/lojasfisicas"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Lojas Físicas
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Menu Especiais */}
        <div data-name="footer-especiais">
          <ul className="list-none p-0 m-0">
            <li className="mb-4">
              <span className="font-teko text-base phone:text-lg font-bold text-gray-800 uppercase tracking-wide">
                Especiais
              </span>
              <ul className="list-none p-0 m-0 mt-3">
                <li data-name="link-uniformes" className="mb-2">
                  <a 
                    href="/especiais/uniformes"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Uniformes
                  </a>
                </li>
                <li data-name="link-promocao" className="mb-2">
                  <a 
                    href="/especiais/promocao"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Promoções
                  </a>
                </li>
                <li data-name="link-industriais" className="mb-2">
                  <a 
                    href="/especiais/industriais"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Industriais
                  </a>
                </li>
                <li data-name="link-escolares" className="mb-2">
                  <a 
                    href="/especiais/escolares"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Escolares
                  </a>
                </li>
                <li data-name="link-empresariais" className="mb-2">
                  <a 
                    href="/especiais/empresariais"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Empresariais
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Menu Ajuda */}
        <div data-name="footer-ajuda">
          <ul className="list-none p-0 m-0">
            <li className="mb-4">
              <span className="font-teko text-base phone:text-lg font-bold text-gray-800 uppercase tracking-wide">
                Ajuda
              </span>
              <ul className="list-none p-0 m-0 mt-3">
                <li data-name="link-trocas" className="mb-2">
                  <a 
                    href="/ajuda/trocas-e-devolucoes"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Trocas e devoluções
                  </a>
                </li>
                <li data-name="link-entregas" className="mb-2">
                  <a 
                    href="/ajuda/entregas"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Entregas
                  </a>
                </li>
                <li data-name="link-minha-conta" className="mb-2">
                  <a 
                    href="/ajuda/minha-conta"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Minha Conta
                  </a>
                </li>
                <li data-name="link-meus-pedidos" className="mb-2">
                  <a 
                    href="/ajuda/meus-pedidos"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Meus Pedidos
                  </a>
                </li>
                <li data-name="link-pagamentos" className="mb-2 hidden lg:block">
                  <a 
                    href="/ajuda/pagamentos"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Pagamentos
                  </a>
                </li>
                <li data-name="link-como-comprar" className="mb-2 hidden lg:block">
                  <a 
                    href="/ajuda/como-comprar"
                    className="text-sm phone:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline"
                  >
                    Como Comprar
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Contato e Redes Sociais */}
        <div data-name="footer-contato">
          <ul className="list-none p-0 m-0">
            <li className="mb-4">
              <span className="font-teko text-base phone:text-lg font-bold text-gray-800 uppercase tracking-wide">
                Central de vendas
              </span>
              <ul className="list-none p-0 m-0 mt-3">
                <li data-name="telefone" className="mb-4 text-sm phone:text-base text-gray-600 font-semibold">
                  (11) 4000-0000
                </li>
              </ul>
            </li>
          </ul>
          
          <div data-name="footer-social" className="flex gap-3 phone:gap-4">
            <a
              data-name="social-facebook"
              href="https://www.facebook.com/idealuniformes"
              aria-label="facebook"
              className="flex items-center justify-center w-8 phone:w-10 h-8 phone:h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={16} className="phone:hidden" />
              <Facebook size={20} className="hidden phone:block" />
            </a>
            <a
              data-name="social-instagram"
              href="https://www.instagram.com/idealuniformes"
              aria-label="instagram"
              className="flex items-center justify-center w-8 phone:w-10 h-8 phone:h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={16} className="phone:hidden" />
              <Instagram size={20} className="hidden phone:block" />
            </a>
            <a
              data-name="social-twitter"
              href="https://twitter.com/idealuniformes"
              aria-label="twitter"
              className="flex items-center justify-center w-8 phone:w-10 h-8 phone:h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={16} className="phone:hidden" />
              <Twitter size={20} className="hidden phone:block" />
            </a>
            <a
              data-name="social-youtube"
              href="https://www.youtube.com/idealuniformes"
              aria-label="youtube"
              className="flex items-center justify-center w-8 phone:w-10 h-8 phone:h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={16} className="phone:hidden" />
              <Youtube size={20} className="hidden phone:block" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FooterMenus;