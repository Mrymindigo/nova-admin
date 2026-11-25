import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/services/productService';
import { useTranslation } from '../../utils/services/useTranslation';
import ProductTable from '../../components/products/ProductTable';
import type { Product } from '../../types/product';

import Pagination from '../../shared/pagination';
import { paginate, getTotalPages } from '../../utils/services/paginate';
import { PRODUCTS_PAGE_SIZE } from '../../utils/pagination';
import { Wrapper } from './Style';

const ProductsPage = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);

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

  const visibleProducts = paginate(products, page, PRODUCTS_PAGE_SIZE);
  const totalPages = getTotalPages(products.length, PRODUCTS_PAGE_SIZE);


  return (
    <Wrapper>
      <ProductTable products={visibleProducts} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </Wrapper>
  );

};

export default ProductsPage;