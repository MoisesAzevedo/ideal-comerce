"use client";
import React, { useEffect } from "react";
import type { FC } from "react";
import { X } from "@/icons";

interface SubCategory {
  title: string;
  href: string;
}

interface Category {
  title: string;
  href: string;
  sub: SubCategory[];
}

interface MobileMenuProps {
  dataName?: string;
  categories: Category[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ dataName = "mobile-menu", categories, isOpen, onClose }) => {
  // Prevenir scroll do body quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      // Salva a posição atual do scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restaura o scroll quando fechar
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }

    // Cleanup quando o componente for desmontado
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Fechar apenas se clicar no overlay (não no conteúdo)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      data-name={dataName} 
      className="fixed inset-0 top-[72px] bg-white z-50 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      {/* Header com botão X */}
      <div data-name="mobile-menu-header" className="flex justify-between items-center p-3 phone:p-4 border-b border-gray-200 bg-white sticky top-0">
        <h3 data-name="mobile-menu-title" className="font-sans font-bold text-lg phone:text-xl text-[#1d2d1e]">Categorias</h3>
        <button 
          data-name="mobile-menu-close-button" 
          onClick={onClose}
          className="font-sans p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Fechar menu"
        >
          <X size={24} className="text-[#1d2d1e]" />
        </button>
      </div>

      <div data-name="mobile-menu-content" className="p-3 phone:p-4">
        {categories.map((cat) => (
          <div data-name={`mobile-menu-category-${cat.title}`} key={cat.title} className="border-b border-gray-200 pb-3 phone:pb-4 mb-3 phone:mb-4 last:border-b-0">
            <a data-name={`mobile-menu-category-link-${cat.title}`} href={cat.href} className="font-sans font-bold text-base phone:text-lg text-[#1d2d1e] no-underline block mb-2 phone:mb-3" onClick={onClose}>
              {cat.title}
            </a>
            {cat.sub.map((subCat) => (
              <a data-name={`mobile-menu-sub-${subCat.title}`} key={subCat.title} href={subCat.href} className="font-sans block text-sm phone:text-base text-[#666] no-underline mb-1 phone:mb-2 pl-3 phone:pl-4" onClick={onClose}>
                {subCat.title}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
