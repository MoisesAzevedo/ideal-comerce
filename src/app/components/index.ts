// Global components index
// Responsabilidade: Centralizar exports dos componentes globais

export { SizeSelector } from './SizeSelector/SizeSelector';
export { ColorSelector } from './ColorSelector/ColorSelector';
export { ShippingCalculator } from './ShippingCalculator';
export type { ShippingCalculatorProps, ShippingOption } from './ShippingCalculator';
export { ProductImagesSection } from './ProductImagesSection/ProductImagesSection';
export { default as Thumbnails } from './Thumbnails/Thumbnails';
export { CategoryProductCarousel } from './CategoryProductCarousel';
export type { CategoryProductCarouselProps } from './CategoryProductCarousel';
export { Breadcrumb, useBreadcrumb, ProductPageBreadcrumb, CategoryPageBreadcrumb } from './Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem, UseBreadcrumbOptions } from './Breadcrumb';
export { Filters, ResponsiveFilters, CategoryFilter, SelectedCategoriesBadges, FiltersProvider, useFiltersContext, useFilters } from './Filters';
export type { FilterState, CategoryFilterProps } from './Filters';
export { ProductSkeleton, ProductsSkeleton } from './ProductSkeleton';
export type { ProductSkeletonProps, ProductsSkeletonProps } from './ProductSkeleton';
export { HomeBannerCarousel } from './HomeBannerCarousel';