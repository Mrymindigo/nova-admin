import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/services/productService';
import type { Product } from '../../types/product';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setProducts(await getProducts());
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>Error</p>;
  if (products.length === 0) return <p>Empty</p>;

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <img src={p.image} alt={p.title} width={48} />
          {p.title} - {p.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductsPage;