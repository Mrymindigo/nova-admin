import type { Product } from '../../types/product';

export const filterProducts = (products: Product[], query: string): Product[] => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;

  return products.filter((product) =>
    product.title.toLowerCase().includes(normalized),
  );
};