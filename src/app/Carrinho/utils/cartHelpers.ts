import type { Product } from '../../../../db/types';

export type AggregatedItem = {
  product: Product;
  qty: number;
};

export function aggregateCart(
  cartIds: string[],
  products: Product[],
): AggregatedItem[] {
  const map = new Map<string, number>();
  for (const id of cartIds) map.set(id, (map.get(id) ?? 0) + 1);

  const items: AggregatedItem[] = [];
  for (const [id, qty] of map.entries()) {
    const product = products.find((p) => p.id === id);
    if (product) items.push({ product, qty });
  }

  return items;
}

export default aggregateCart;
