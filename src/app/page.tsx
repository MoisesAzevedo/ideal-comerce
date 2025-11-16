'use client';

import SharedPageLayout from "./layouts/SharedPageLayout";
import Banner from "./components/Banner/Banner";
import Products from "./components/Product_pagination/Products";
import InformativeBanners from "./components/InformativeBanner/InformativeBanners";
import { Breadcrumb, ResponsiveFilters, SelectedCategoriesBadges, FiltersProvider, useFilters } from "./components";
import { useCategories } from "./components/Filters/hooks";
import { generatePageTitle } from "./components/Filters/utils";

/**
 * Componente interno que usa o contexto de filtros
 */
function HomeContent() {
  const { filterState } = useFilters();
  const { categories } = useCategories();
  
  // Generate dynamic page title
  const pageTitle = generatePageTitle(filterState.categories, categories);

  return (
    <SharedPageLayout showTopFrame={true} banner={<Banner />}>
      <InformativeBanners />
      <div className="flex flex-col md:flex-row items-start w-full mt-16 gap-6">
        <section data-name="filters" className="w-full md:w-auto md:mr-8">
          <ResponsiveFilters />
        </section>
        
        <section data-name="view" className="flex-1 w-full">{/* Breadcrumb logo acima do título na seção de produtos */}
          <div className="w-full mb-4">
            <Breadcrumb 
              items={[{ label: pageTitle, href: '/' }]} 
              showHome={true}
              className="max-w-container mx-auto" 
            />
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold mt-4 uppercase pb-3 text-left">
              {pageTitle}
            </h2>
          </div>

          {/* Show badges for multiple selected categories */}
          {filterState.categories.length > 1 && (
            <SelectedCategoriesBadges className="mb-6" />
          )}

          <Products />
        </section>
      </div>
    </SharedPageLayout>
  );
}

export default function Home() {
  return (
    <FiltersProvider>
      <HomeContent />
    </FiltersProvider>
  );
}
