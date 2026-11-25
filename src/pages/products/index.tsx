import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/services/productService';
import { useTranslation } from '../../utils/services/useTranslation';
import type { Product } from '../../types/product';

const ProductsPage = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  if (isLoading) return <p>{t.common.loading}</p>;
  if (hasError) return <p>{t.common.error}</p>;
  if (products.length === 0) return <p>{t.products.empty}</p>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} width={48} />
          {product.title} - {product.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductsPage;