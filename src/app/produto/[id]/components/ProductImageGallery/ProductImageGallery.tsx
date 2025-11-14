/**
 * Component: ProductImageGallery
 * Responsabilidade única: Exibir galeria de imagens do produto com navegação
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getAssetPath } from '../../../../../utils/paths';
import styles from './ProductImageGallery.module.scss';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div 
        data-name="no-images-placeholder" 
        className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg"
      >
        <span data-name="no-images-text" className="text-gray-500">
          Nenhuma imagem disponível
        </span>
      </div>
    );
  }

  return (
    <div data-name="product-image-gallery" className={styles.gallery}>
      {/* Imagem principal */}
      <div data-name="main-image-container" className={styles.mainImageContainer}>
        <Image
          data-name="main-product-image"
          src={images[selectedImageIndex]}
          alt={`${productName} - Imagem ${selectedImageIndex + 1}`}
          width={600}
          height={600}
          className={styles.mainImage}
          priority
        />
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div data-name="thumbnails-container" className={styles.thumbnailsContainer}>
          {images.map((image, index) => (
            <button
              key={index}
              data-name={`thumbnail-button-${index}`}
              className={`${styles.thumbnail} ${
                selectedImageIndex === index ? styles.thumbnailActive : ''
              }`}
              onClick={() => setSelectedImageIndex(index)}
              aria-label={`Ver imagem ${index + 1} de ${productName}`}
            >
              <Image
                data-name={`thumbnail-image-${index}`}
                src={image}
                alt={`${productName} - Miniatura ${index + 1}`}
                width={80}
                height={80}
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}