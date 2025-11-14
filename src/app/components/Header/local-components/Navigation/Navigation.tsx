"use client";

import React, { useState, useMemo } from "react";
import styles from "./Navigation.module.scss";
import SelectArrow from "./SelectArrow";
import { categories } from "../../../../../../db/data/categories";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const menuCategories = useMemo(() => {
    const mains = categories
      .filter((c) => c.parent_id === null && c.is_active)
      .sort((a, b) => a.sort_order - b.sort_order);

    return mains.map((main) => ({
      title: main.name,
      href: `/categorias/${main.slug}`,
      sub: categories
        .filter((s) => s.parent_id === main.id && s.is_active)
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((s) => ({ title: s.name, href: `/categorias/${main.slug}/${s.slug}` }))
    }));
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className={styles.navigation} style={{ width: "100%" }} data-name="navigation-root">
      <div
        style={{
          maxWidth: 1197,
          width: "100%",
          margin: "0 auto",
          position: "relative",
          height: 34,
          display: "flex",
          alignItems: "center",
          gap: 0
        }}
        data-name="navigation-inner"
      >
        {/* Botão "TODAS AS CATEGORIAS" */}
        <div
          className={styles.item}
          style={{
            width: "auto",
            minWidth: 220,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingRight: 20,
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
              display: "flex",
              alignItems: "center",
              gap: 4,
              margin: 0,
              whiteSpace: "nowrap"
            }}
            data-name="title-all-categories"
          >
            TODAS AS CATEGORIAS
            <SelectArrow rotated={open} color="#1d2d1e" />
          </h2>
        </div>

        {/* Links de categorias principais */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "2rem",
          flex: 1,
          justifyContent: "space-around",
          paddingLeft: "2rem"
        }}>
          {menuCategories.slice(0, 5).map((cat) => (
            <h2
              key={cat.title}
              className={styles.item}
              style={{
                fontFamily: "Teko, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                color: "#1d2d1e",
                fontSize: "1.5rem",
                letterSpacing: 2,
                lineHeight: "normal",
                cursor: "pointer",
                transition: "color 0.2s",
                margin: 0,
                whiteSpace: "nowrap"
              }}
              data-name={`top-link-${cat.title}`}
            >
              {cat.title.toUpperCase()}
            </h2>
          ))}
        </div>

        {open && (
          <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-name="categories-dropdown"
          >
            {menuCategories.map((cat) => (
              <div key={cat.title} style={{ minWidth: 0, textAlign: "left" }} data-name={`category-${cat.title}`}>
                <a
                  href={cat.href}
                  data-name={`category-link-${cat.title}`}
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
                      <li key={sub.title} style={{ marginBottom: 2 }} data-name={`subcategory-${sub.title}`}>
                        <a
                          href={sub.href}
                          data-name={`subcategory-link-${sub.title}`}
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
      </div>
    </div>
  );
};

export default Navigation;

