'use client';

import SharedPageLayout from "../layouts/SharedPageLayout";
import Products from "../components/Product_pagination/Products";
import { Breadcrumb, useBreadcrumb, FiltersProvider, ResponsiveFilters, SelectedCategoriesBadges, useFilters } from "../components";
import { useCategories } from "../components/Filters/hooks";
import { generatePageTitle } from "../components/Filters/utils";

function ProdutosContent() {
  const breadcrumbItems = useBreadcrumb();
  const { filterState } = useFilters();
  const { categories } = useCategories();
  
  // Generate dynamic page title based on filters
  const pageTitle = filterState.categories.length > 0 
    ? generatePageTitle(filterState.categories, categories)
    : "TODOS OS PRODUTOS";

  const breadcrumbComponent = (
    <Breadcrumb items={breadcrumbItems} className="max-w-container mx-auto" />
  );

  return (
    <SharedPageLayout showTopFrame={false} breadcrumb={breadcrumbComponent}>
      <div className="flex flex-col md:flex-row items-start w-full mt-8 gap-6">
        <section data-name="filters" className="w-full md:w-auto md:mr-8">
          <ResponsiveFilters />
        </section>
        
        <section data-name="view" className="flex-1 w-full">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold uppercase pb-3 text-left">
              {pageTitle}
            </h1>
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

export default function ProdutosPage() {
  return (
    <FiltersProvider>
      <ProdutosContent />
    </FiltersProvider>
  );
}