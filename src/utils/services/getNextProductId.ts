import type { Product } from '../../types/product';

export const getNextProductId = (products: Product[]): number =>
    Math.max(0, ...products.map((product) => product.id)) + 1;