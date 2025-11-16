'use client';

import SharedPageLayout from "../layouts/SharedPageLayout";
import Products from "../components/Product_pagination/Products";
import { Breadcrumb, useBreadcrumb, FiltersProvider } from "../components";

function ProdutosContent() {
  const breadcrumbItems = useBreadcrumb();

  const breadcrumbComponent = (
    <Breadcrumb items={breadcrumbItems} className="max-w-container mx-auto" />
  );

  return (
    <SharedPageLayout showTopFrame={false} breadcrumb={breadcrumbComponent}>
      <div className="flex flex-col items-center w-full mt-8">
        <h1 className="text-3xl font-bold mb-8 uppercase pb-3 w-full text-center">
          TODOS OS PRODUTOS
        </h1>
        <Products />
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