/**
 * Componente de carrossel de imagens do produto
 * Responsabilidade única: Exibir e navegar pelas imagens do produto
 */

'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import type { ProductCarouselProps, CarouselState } from '../types';
import { ProductImageUtils } from '../utils/productFormatters';

export default function ProductImageCarousel({ 
  images, 
  productName, 
  onImageSelect,
  selectedIndex 
}: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    containScroll: 'trimSnaps'
  });
  
  const [carouselState, setCarouselState] = useState<CarouselState>({
    selectedIndex: 0,
    canScrollPrev: false,
    canScrollNext: false
  });

  // Atualizar estado do carrossel
  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return;
    
    setCarouselState({
      selectedIndex: emblaApi.selectedScrollSnap(),
      canScrollPrev: emblaApi.canScrollPrev(),
      canScrollNext: emblaApi.canScrollNext()
    });
  }, [emblaApi]);

  // Navegar para imagem específica
  const scrollToImage = useCallback((index: number) => {
    if (!emblaApi) return;
    
    emblaApi.scrollTo(index);
    onImageSelect(index);
  }, [emblaApi, onImageSelect]);

  // Navegar para próxima imagem
  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  // Navegar para imagem anterior
  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  // Configurar listeners do carrossel
  useEffect(() => {
    if (!emblaApi) return;

    updateCarouselState();
    emblaApi.on('select', updateCarouselState);
    emblaApi.on('reInit', updateCarouselState);

    return () => {
      emblaApi.off('select', updateCarouselState);
      emblaApi.off('reInit', updateCarouselState);
    };
  }, [emblaApi, updateCarouselState]);

  // Sincronizar com selectedIndex externo
  useEffect(() => {
    if (emblaApi && selectedIndex !== carouselState.selectedIndex) {
      emblaApi.scrollTo(selectedIndex);
    }
  }, [emblaApi, selectedIndex, carouselState.selectedIndex]);

  if (!images || images.length === 0) {
    return (
      <div 
        data-name="product-carousel-empty" 
        className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
      >
        <span 
          data-name="no-image-message" 
          className="text-gray-500 text-sm"
        >
          Sem imagens disponíveis
        </span>
      </div>
    );
  }

  return (
    <div data-name="product-carousel-container" className="w-full">
      {/* Carrossel principal */}
      <div data-name="main-carousel" className="relative mb-4">
        <div 
          data-name="main-carousel-viewport"
          className="overflow-hidden rounded-lg"
          ref={emblaRef}
        >
          <div data-name="main-carousel-container" className="flex">
            {images.map((image, index) => (
              <div 
                key={index}
                data-name={`main-carousel-slide-${index}`}
                className="relative flex-none w-full aspect-square"
              >
                <Image
                  src={image}
                  alt={ProductImageUtils.generateImageAlt(productName, index)}
                  fill
                  sizes={ProductImageUtils.generateImageSizes(true)}
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botões de navegação */}
        {images.length > 1 && (
          <>
            <button
              data-name="carousel-prev-button"
              className={`absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 bg-white/80 rounded-full shadow-lg flex items-center justify-center transition-all ${
                carouselState.canScrollPrev 
                  ? 'opacity-100 hover:bg-white cursor-pointer' 
                  : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={scrollPrev}
              disabled={!carouselState.canScrollPrev}
              aria-label="Imagem anterior"
            >
              <span 
                data-name="prev-arrow" 
                className="text-gray-700 text-lg font-bold"
              >
                ‹
              </span>
            </button>

            <button
              data-name="carousel-next-button"
              className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 bg-white/80 rounded-full shadow-lg flex items-center justify-center transition-all ${
                carouselState.canScrollNext 
                  ? 'opacity-100 hover:bg-white cursor-pointer' 
                  : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={scrollNext}
              disabled={!carouselState.canScrollNext}
              aria-label="Próxima imagem"
            >
              <span 
                data-name="next-arrow" 
                className="text-gray-700 text-lg font-bold"
              >
                ›
              </span>
            </button>
          </>
        )}

        {/* Indicadores */}
        {images.length > 1 && (
          <div 
            data-name="carousel-indicators" 
            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2"
          >
            {images.map((_, index) => (
              <button
                key={index}
                data-name={`carousel-indicator-${index}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === carouselState.selectedIndex 
                    ? 'bg-white' 
                    : 'bg-white/50'
                }`}
                onClick={() => scrollToImage(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div data-name="thumbnail-list" className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              data-name={`thumbnail-${index}`}
              className={`relative flex-none w-16 h-16 xs:w-20 xs:h-20 rounded-md overflow-hidden border-2 transition-all ${
                index === selectedIndex
                  ? 'border-[#495949]'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => scrollToImage(index)}
            >
              <Image
                src={image}
                alt={ProductImageUtils.generateImageAlt(productName, index)}
                fill
                sizes={ProductImageUtils.generateImageSizes(false)}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}