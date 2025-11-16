import { useRouter } from 'next/navigation';
import { useCart } from '../../../Carrinho/cart';

export const useProductNavigation = () => {
  const router = useRouter();
  const { addToCart } = useCart();

  const buyProduct = (productId: string) => {
    // Adicionar produto ao carrinho
    addToCart(productId);
    
    // Redirecionar para o checkout
    setTimeout(() => {
      router.push('/Checkout');
    }, 100); // Pequeno delay para garantir que o produto seja adicionado
  };

  const viewProduct = (productId: string) => {
    // Navegar para a página do produto
    router.push(`/produto/${productId}`);
  };

  return {
    buyProduct,
    viewProduct
  };
};
