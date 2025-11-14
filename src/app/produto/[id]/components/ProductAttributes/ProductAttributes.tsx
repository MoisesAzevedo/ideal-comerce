/**
 * Component: ProductAttributes
 * Responsabilidade única: Exibir atributos dinâmicos do produto
 */

'use client';

import styles from './ProductAttributes.module.scss';

interface ProductAttributesProps {
  attributes: Record<string, any>;
}

export function ProductAttributes({ attributes }: ProductAttributesProps) {
  const attributeEntries = Object.entries(attributes);

  if (attributeEntries.length === 0) {
    return null;
  }

  // Função para formatar nomes de atributos
  const formatAttributeName = (key: string): string => {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div data-name="product-attributes-container" className={styles.container}>
      <h3 data-name="attributes-title" className={styles.title}>
        Especificações Técnicas
      </h3>
      
      <div data-name="attributes-list" className={styles.attributesList}>
        {attributeEntries.map(([key, value]) => (
          <div 
            key={key} 
            data-name={`attribute-${key}`} 
            className={styles.attributeItem}
          >
            <span data-name="attribute-label" className={styles.label}>
              {formatAttributeName(key)}:
            </span>
            <span data-name="attribute-value" className={styles.value}>
              {String(value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}