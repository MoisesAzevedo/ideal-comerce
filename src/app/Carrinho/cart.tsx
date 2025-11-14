'use client';
import React from 'react';

type CartContextValue = {
  cartIds: string[];
  addToCart: (id: string) => void;
  clearCart: () => void;
  removeOne: (id: string) => void;
  removeAll: (id: string) => void;
};

const CartContext = React.createContext<CartContextValue | undefined>(
  undefined,
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartIds, setCartIds] = React.useState<string[]>(() => {
    try {
      if (typeof window === 'undefined') return [];
      const raw = localStorage.getItem('cartIds');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem('cartIds', JSON.stringify(cartIds));
    } catch {
      // ignore
    }
  }, [cartIds]);

  const addToCart = (id: string) => setCartIds((s) => [...s, id]);
  const clearCart = () => setCartIds([]);
  const removeOne = (id: string) =>
    setCartIds((s) => {
      const idx = s.indexOf(id);
      if (idx === -1) return s;
      const copy = [...s];
      copy.splice(idx, 1);
      return copy;
    });
  const removeAll = (id: string) =>
    setCartIds((s) => s.filter((x) => x !== id));

  return (
    <CartContext.Provider
      value={{ cartIds, addToCart, clearCart, removeOne, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export default CartProvider;
