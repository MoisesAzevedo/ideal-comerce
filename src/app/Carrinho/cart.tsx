'use client';
import React from 'react';

type CartContextValue = {
  cartIds: number[];
  addToCart: (id: number) => void;
  clearCart: () => void;
  removeOne: (id: number) => void;
  removeAll: (id: number) => void;
};

const CartContext = React.createContext<CartContextValue | undefined>(
  undefined,
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartIds, setCartIds] = React.useState<number[]>(() => {
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

  const addToCart = (id: number) => setCartIds((s) => [...s, id]);
  const clearCart = () => setCartIds([]);
  const removeOne = (id: number) =>
    setCartIds((s) => {
      const idx = s.indexOf(id);
      if (idx === -1) return s;
      const copy = [...s];
      copy.splice(idx, 1);
      return copy;
    });
  const removeAll = (id: number) =>
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
