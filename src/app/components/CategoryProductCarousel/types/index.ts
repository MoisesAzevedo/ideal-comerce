// Responsabilidade: Definir tipos específicos para o CategoryProductCarousel
import type { Product } from '../../../../../db/types';

export interface CategoryProductCarouselProps {
  /** Categoria dos produtos a serem exibidos */
  category: string;
  /** Título personalizado para o carrossel (opcional) */
  title?: string;
  /** Número máximo de produtos a serem carregados */
  maxProducts?: number;
  /** ID do produto a ser excluído (útil para produtos relacionados) */
  excludeProductId?: string;
  /** Se deve mostrar o link "Ver mais" */
  showViewMoreLink?: boolean;
  /** URL customizada para o link "Ver mais" */
  viewMoreUrl?: string;
  /** Classe CSS adicional para o container */
  className?: string;
}

export interface CategoryProductCarouselData {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
}

export interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  className?: string;
}