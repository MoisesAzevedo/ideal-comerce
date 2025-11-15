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

  // Filtrar tamanho e cor dos atributos técnicos
  const filteredAttributes = attributeEntries.filter(([key]) => {
    const normalizedKey = key.toLowerCase().replace(/[-_\s]/g, '_');
    return !['size', 'color', 'tamanho', 'cor'].includes(normalizedKey);
  });

  if (filteredAttributes.length === 0) {
    return null;
  }

  // Função para formatar e traduzir nomes de atributos
  const formatAttributeName = (key: string): string => {
    // Mapeamento de traduções para atributos comuns
    const translations: Record<string, string> = {
      'size': 'Tamanho',
      'color': 'Cor',
      'material': 'Material',
      'brand': 'Marca',
      'model': 'Modelo',
      'weight': 'Peso',
      'dimensions': 'Dimensões',
      'width': 'Largura',
      'height': 'Altura',
      'length': 'Comprimento',
      'fabric': 'Tecido',
      'care_instructions': 'Instruções de Cuidado',
      'origin': 'Origem',
      'warranty': 'Garantia',
      'category': 'Categoria',
      'style': 'Estilo',
      'gender': 'Gênero',
      'season': 'Estação',
      'sleeve_type': 'Tipo de Manga',
      'collar_type': 'Tipo de Gola',
      'fit': 'Caimento',
      'closure_type': 'Tipo de Fechamento',
      'pocket_type': 'Tipo de Bolso',
      'product_code': 'Código do Produto',
      'sku': 'SKU',
      'ref': 'Referência',
      'reference': 'Referência'
    };

    // Normalizar a chave (converter para lowercase e remover espaços/underscores)
    const normalizedKey = key.toLowerCase().replace(/[-_\s]/g, '_');
    
    // Verificar se há uma tradução específica
    if (translations[normalizedKey]) {
      return translations[normalizedKey];
    }
    
    // Fallback: formatar automaticamente
    return key
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div data-name="product-attributes-container" className={styles.container}>
      <h3 data-name="attributes-title" className={styles.title}>
        Especificações Técnicas
      </h3>
      
      <div data-name="attributes-list" className={styles.attributesList}>
        {filteredAttributes.map(([key, value]) => (
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