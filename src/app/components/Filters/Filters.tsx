'use client';

import { useEffect, useRef, useState } from 'react';
import { CategoryFilter, SizeFilter, PriceFilter } from './components';
import styles from './Filters.module.scss';

interface FiltersProps {
  className?: string;
}

/**
 * Main filters component
 * Responsibility: Orchestrate all filter components using centralized state
 * Added: sticky/fixed behavior for the inner `filter-group` when scrolling
 */
const Filters = ({ className = '' }: FiltersProps) => {
  const groupRef = useRef<HTMLDivElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [fixedStyle, setFixedStyle] = useState<React.CSSProperties | undefined>(undefined);

  useEffect(() => {
    let ticking = false;

    function update() {
      if (!groupRef.current || !placeholderRef.current) return;

      // Use placeholder's top as anchor representing the element's
      // original position in the flow. This allows restoring the
      // element when scrolling up so the original spot reaches top=110px.
      const anchorRect = placeholderRef.current.getBoundingClientRect();

      if (anchorRect.top <= 110 && !isFixed) {
        // compute current dimensions from the group before fixing
        const groupRect = groupRef.current.getBoundingClientRect();
        const computedStyle: React.CSSProperties = {
          position: 'fixed',
          top: '110px',
          left: `${groupRect.left}px`,
          width: `${groupRect.width}px`,
          zIndex: 999,
        };

        // set placeholder height to avoid layout jump
        placeholderRef.current.style.height = `${groupRect.height}px`;

        setFixedStyle(computedStyle);
        setIsFixed(true);
      } else if (anchorRect.top > 110 && isFixed) {
        // Restore to normal flow when the placeholder (original spot)
        // scrolls back down past 110px from the top of the viewport.
        placeholderRef.current.style.height = '';
        setFixedStyle(undefined);
        setIsFixed(false);
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // run once to initialize
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isFixed]);

  return (
    <div className={`${styles.filters} ${styles.filtersContainer} ${className}`} data-name="filters-container">
      <div ref={placeholderRef} />
      <div
        ref={groupRef}
        className={styles.filterGroup}
        data-name="filter-group"
        style={fixedStyle}
      >
        <CategoryFilter />
        <SizeFilter />
        <PriceFilter />
      </div>
    </div>
  );
};

export default Filters;