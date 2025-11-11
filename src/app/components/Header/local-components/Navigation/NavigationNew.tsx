"use client";
import React, { useState } from "react";
import { Menu, X } from "@/icons";
import MobileMenu from "./MobileMenu";
import SelectArrow from "./SelectArrow";

// Nova estrutura de categorias e subcategorias para o menu
const menuCategories = [
  {
    title: "Fardas e Uniformes",
    href: "/categorias/fardas-uniformes",
    sub: [
      {
        title: "Farda Militar",
        href: "/categorias/fardas-uniformes/farda-militar"
      },
      {
        title: "Uniforme Escolar",
        href: "/categorias/fardas-uniformes/uniforme-escolar"
      },
      {
        title: "Uniforme Tático",
        href: "/categorias/fardas-uniformes/uniforme-tatico"
      }
    ]
  },
  {
    title: "Calçados",
    href: "/categorias/calcados",
    sub: [
      { title: "Coturno", href: "/categorias/calcados/coturno" },
      { title: "Bota Tática", href: "/categorias/calcados/bota-tatica" },
      { title: "Tênis Militar", href: "/categorias/calcados/tenis-militar" }
    ]
  },
  {
    title: "Mochilas e Bolsas",
    href: "/categorias/mochilas-bolsas",
    sub: [
      {
        title: "Mochila Tática",
        href: "/categorias/mochilas-bolsas/mochila-tatica"
      },
      {
        title: "Bolsa de Ombro",
        href: "/categorias/mochilas-bolsas/bolsa-ombro"
      },
      {
        title: "Pochete Militar",
        href: "/categorias/mochilas-bolsas/pochete-militar"
      }
    ]
  },
  {
    title: "Equipamentos Táticos",
    href: "/categorias/equipamentos-taticos",
    sub: [
      {
        title: "Colete Tático",
        href: "/categorias/equipamentos-taticos/colete-tatico"
      },
      {
        title: "Óculos de Proteção",
        href: "/categorias/equipamentos-taticos/oculos-protecao"
      },
      {
        title: "Luvas Táticas",
        href: "/categorias/equipamentos-taticos/luvas-taticas"
      }
    ]
  },
  {
    title: "Camping",
    href: "/categorias/camping",
    sub: [
      { title: "Barracas", href: "/categorias/camping/barracas" },
      { title: "Sacos de Dormir", href: "/categorias/camping/sacos-dormir" },
      { title: "Utensílios", href: "/categorias/camping/utensilios" }
    ]
  },
  {
    title: "Aventura",
    href: "/categorias/aventura",
    sub: [
      { title: "Barracas", href: "/categorias/aventura/barracas" },
      { title: "Sacos de Dormir", href: "/categorias/aventura/sacos-dormir" },
      { title: "Lanternas", href: "/categorias/aventura/lanternas" }
    ]
  },
  {
    title: "Kits",
    href: "/categorias/kits",
    sub: []
  }
];

const staticMenuItems = [
  { title: "CAMPING", href: "/camping" },
  { title: "FARDAS E UNIFORMES", href: "/fardas-uniformes" },
  { title: "CALÇADOS", href: "/calcados" },
  { title: "MOCHILAS E BOLSAS", href: "/mochilas-bolsas" },
  { title: "EQUIPAMENTOS TÁTICOS", href: "/equipamentos-taticos" }
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="w-full bg-white sticky top-0 z-[1000]">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
  {/* Desktop Navigation */}
  <div data-name="nav-desktop" className="hidden lg:flex items-center h-8 relative">
          {/* Dropdown "Todas as Categorias" */}
          <div
            className="relative flex items-center cursor-pointer pr-7 min-w-[180px] h-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="font-teko font-normal text-[#1d2d1e] text-2xl tracking-[2px] leading-6 text-center flex items-center h-8 gap-1 m-0">
              TODAS AS CATEGORIAS
            </h2>
            <SelectArrow rotated={open} color="#1d2d1e" />
          </div>

          {/* Menu Items Desktop */}
          {staticMenuItems.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="absolute font-teko font-normal text-[#1d2d1e] text-2xl tracking-[2px] leading-normal cursor-pointer transition-colors hover:text-[#2b4d2b]"
              style={{
                left: `${289 + (index * 110)}px`,
                top: '-1px'
              }}
            >
              {item.title}
            </a>
          ))}

          {/* Dropdown Menu */}
          {open && (
            <div
              className="absolute top-8 left-0 w-full max-w-[1197px] h-[400px] bg-white shadow-lg rounded-md z-10 p-6 grid grid-cols-4 gap-2 items-start justify-items-start"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {menuCategories.map((cat) => (
                <div key={cat.title} className="min-w-0 text-left">
                  <a
                    href={cat.href}
                    className="font-bold text-lg text-[#1d2d1e] no-underline block mb-3 hover:text-[#2b4d2b] transition-colors"
                  >
                    {cat.title}
                  </a>
                  {cat.sub.map((subCat) => (
                    <a
                      key={subCat.title}
                      href={subCat.href}
                      className="block text-sm text-[#666] no-underline mb-2 hover:text-[#333] transition-colors"
                    >
                      {subCat.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

  {/* Mobile and Tablet Navigation */}
  <div data-name="nav-mobile-toggle" className="lg:hidden flex items-center justify-between h-10 phone:h-12 py-2">
          {/* Mobile Menu Button */}
          <button
            data-name="nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center p-1 phone:p-2 cursor-pointer bg-transparent border-none rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X size={20} className="text-[#1d2d1e]" />
            ) : (
              <Menu size={20} className="text-[#1d2d1e]" />
            )}
          </button>

          <h2 className="font-teko font-normal text-[#1d2d1e] text-base phone:text-lg tracking-wide">
            CATEGORIAS
          </h2>

          <div className="w-8 phone:w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Mobile and Tablet Menu Overlay - usa componente reutilizável */}
        <MobileMenu dataName="navigation-mobilemenu" categories={menuCategories} isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>
    </div>
  );
};

export default Navigation;