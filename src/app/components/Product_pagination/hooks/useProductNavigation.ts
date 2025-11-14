import { useRouter } from 'next/navigation';

export const useProductNavigation = () => {
  const router = useRouter();

  const buyProduct = (productId: number) => {
    // Navegar para a página do produto
    router.push(`/pages/produto/${productId}`);
  };

  const viewProduct = (productId: number) => {
    // Navegar para a página do produto
    router.push(`/pages/produto/${productId}`);
  };

  return {
    buyProduct,
    viewProduct
  };
};
