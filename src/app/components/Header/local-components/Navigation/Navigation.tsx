"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
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
      id: main.id,
      title: main.name,
      slug: main.slug,
      href: `/produtos?categories=${main.id}`,
      sub: categories
        .filter((s) => s.parent_id === main.id && s.is_active)
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((s) => ({ 
          id: s.id,
          title: s.name, 
          slug: s.slug,
          href: `/produtos?categories=${s.id}` 
        }))
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
          <h2 className={styles.topLink} data-name="title-all-categories">
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
            <Link
              key={cat.id}
              href={cat.href}
              className={`${styles.item} ${styles.topLink}`}
              data-name={`top-link-${cat.title}`}
            >
              {cat.title.toUpperCase()}
            </Link>
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
              <div key={cat.id} className={styles.categoryColumn} data-name={`category-${cat.slug}`}>
                <Link
                  href={cat.href}
                  className={styles.categoryMainLink}
                  data-name={`category-link-${cat.slug}`}
                >
                  {cat.title}
                </Link>
                {cat.sub && cat.sub.length > 0 && (
                  <ul className={styles.subcategoryList}>
                    {cat.sub.map((sub) => (
                      <li key={sub.id} className={styles.subcategoryItem} data-name={`subcategory-${sub.slug}`}>
                        <Link
                          href={sub.href}
                          className={styles.subcategoryLink}
                          data-name={`subcategory-link-${sub.slug}`}
                        >
                          {sub.title}
                        </Link>
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

