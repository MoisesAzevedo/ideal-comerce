// Responsabilidade: Gerenciar estado e dados do carrossel de produtos por categoria
'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { fetchProductsByCategory } from '../services/categoryProductsService';
import type { CategoryProductCarouselData } from '../types';

export interface UseCategoryProductCarouselParams {
  category: string;
  maxProducts?: number;
  excludeProductId?: string;
  carouselOptions?: EmblaOptionsType;
}

export interface UseCategoryProductCarouselReturn extends CategoryProductCarouselData {
  emblaRef: (node: HTMLElement | null) => void;
  emblaApi: any;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  refresh: () => Promise<void>;
}

export function useCategoryProductCarousel({
  category,
  maxProducts = 10,
  excludeProductId,
  carouselOptions = {
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'keepSnaps',
    dragFree: false,
    skipSnaps: false,
  },
}: UseCategoryProductCarouselParams): UseCategoryProductCarouselReturn {
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);
  
  const [data, setData] = useState<CategoryProductCarouselData>({
    products: [],
    isLoading: true,
    error: null,
    hasMore: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Função para carregar produtos
  const loadProducts = useCallback(async () => {
    if (!category) return;

    setData(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetchProductsByCategory({
        category,
        maxProducts,
        excludeProductId,
      });

      setData({
        products: response.products,
        isLoading: false,
        error: null,
        hasMore: response.hasMore,
      });
    } catch (error) {
      setData({
        products: [],
        isLoading: false,
        error: error instanceof Error ? error.message : 'Erro ao carregar produtos',
        hasMore: false,
      });
    }
  }, [category, maxProducts, excludeProductId]);

  // Atualizar estado dos botões de navegação
  const updateButtonsState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Funções de navegação
  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const refresh = useCallback(async () => {
    await loadProducts();
  }, [loadProducts]);

  // Efeitos
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtonsState();
    emblaApi.on('select', updateButtonsState);
    emblaApi.on('reInit', updateButtonsState);

    return () => {
      emblaApi.off('select', updateButtonsState);
      emblaApi.off('reInit', updateButtonsState);
    };
  }, [emblaApi, updateButtonsState]);

  return {
    ...data,
    emblaRef,
    emblaApi,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
    refresh,
  };
}