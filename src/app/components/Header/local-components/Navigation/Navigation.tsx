"use client";
import React, { useState } from "react";

import styles from "./Navigation.module.scss";
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
      { title: "Colete", href: "/categorias/equipamentos-taticos/colete" },
      {
        title: "Cinto Modular",
        href: "/categorias/equipamentos-taticos/cinto-modular"
      },
      {
        title: "Joelheira e Cotoveleira",
        href: "/categorias/equipamentos-taticos/joelheira-cotoveleira"
      }
    ]
  },
  {
    title: "Acessórios",
    href: "/categorias/acessorios",
    sub: [
      { title: "Boné Militar", href: "/categorias/acessorios/bone-militar" },
      { title: "Luvas", href: "/categorias/acessorios/luvas" },
      {
        title: "Óculos de Proteção",
        href: "/categorias/acessorios/oculos-protecao"
      }
    ]
  },
  {
    title: "Sobrevivência",
    href: "/categorias/sobrevivencia",
    sub: [
      { title: "Canivetes", href: "/categorias/sobrevivencia/canivetes" },
      { title: "Apitos", href: "/categorias/sobrevivencia/apitos" },
      { title: "Cordas", href: "/categorias/sobrevivencia/cordas" }
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

const Navigation = () => {
  const [open, setOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className={styles.navigation} style={{ width: "100%" }}>
      <div
        style={{
          width: 1197,
          margin: "0 auto",
          position: "relative",
          height: 34
        }}
      >
        <div
          className={styles.item}
          style={{
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            width: "auto",
            minWidth: 120,
            height: 23,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 28, // espaço para o ícone
            cursor: "pointer",
            zIndex: 20
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2
            style={{
              fontFamily: "Teko, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: "#1d2d1e",
              fontSize: "1.5rem",
              letterSpacing: 2,
              lineHeight: "23px",
              textAlign: "center",
              width: "100%",
              display: "flex",
              alignItems: "center",
              height: "34px",
              gap: 4,
              margin: 0
            }}
          >
            TODAS AS CATEGORIAS
          </h2>

          <SelectArrow rotated={open} color="#1d2d1e" />
        </div>
        {open && (
          <div
            style={{
              position: "absolute",
              top: 34,
              left: 0,
              width: 1197,
              height: 400,
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              borderRadius: 6,
              zIndex: 10,
              minWidth: 180,
              padding: 24,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              alignItems: "start",
              justifyItems: "start"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {menuCategories.map((cat) => (
              <div key={cat.title} style={{ minWidth: 0, textAlign: "left" }}>
                <a
                  href={cat.href}
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#1d2d1e",
                    textDecoration: "none",
                    marginBottom: 4,
                    display: "block",
                    letterSpacing: 1,
                    fontFamily: "var(--font-primary)",
                    textTransform: "uppercase"
                  }}
                >
                  {cat.title}
                </a>
                {cat.sub && cat.sub.length > 0 && (
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {cat.sub.map((sub) => (
                      <li key={sub.title} style={{ marginBottom: 2 }}>
                        <a
                          href={sub.href}
                          style={{
                            color: "#444",
                            fontSize: 13,
                            textDecoration: "none",
                            fontWeight: 400,
                            letterSpacing: 0.2,
                            fontFamily: "Calibri, Arial, sans-serif"
                          }}
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
        <h2
          className={styles.item}
          style={{
            left: 289,
            top: -1,
            position: "absolute",
            fontFamily: "Teko, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            color: "#1d2d1e",
            fontSize: "1.5rem",
            letterSpacing: 2,
            lineHeight: "normal",
            cursor: "pointer",
            transition: "color 0.2s"
          }}
        >
          CAMPING
        </h2>
        <h2
          className={styles.item}
          style={{
            left: 390,
            top: -1,
            position: "absolute",
            fontFamily: "Teko, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            color: "#1d2d1e",
            fontSize: "1.5rem",
            letterSpacing: 2,
            lineHeight: "normal",
            cursor: "pointer",
            transition: "color 0.2s"
          }}
        >
          FARDAS E UNIFORMES
        </h2>
        <h2
          className={styles.item}
          style={{
            left: 600,
            top: -1,
            position: "absolute",
            fontFamily: "Teko, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            color: "#1d2d1e",
            fontSize: "1.5rem",
            letterSpacing: 2,
            lineHeight: "normal",
            cursor: "pointer",
            transition: "color 0.2s"
          }}
        >
          CALÇADOS
        </h2>
        <h2
          className={styles.item}
          style={{
            left: 711,
            top: -1,
            position: "absolute",
            fontFamily: "Teko, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            color: "#1d2d1e",
            fontSize: "1.5rem",
            letterSpacing: 2,
            lineHeight: "normal",
            cursor: "pointer",
            transition: "color 0.2s"
          }}
        >
          MOCHILAS E BOLSAS
        </h2>
        <h2
          className={styles.item}
          style={{
            left: 908,
            top: -1,
            position: "absolute",
            fontFamily: "Teko, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            color: "#1d2d1e",
            fontSize: "1.5rem",
            letterSpacing: 2,
            lineHeight: "normal",
            cursor: "pointer",
            transition: "color 0.2s"
          }}
        >
          EQUIPAMENTOS TÁTICOS
        </h2>
      </div>
    </div>
  );
};

export default Navigation;
