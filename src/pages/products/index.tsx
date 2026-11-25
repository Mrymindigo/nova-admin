
import { useEffect, useState } from 'react';
import ProductTable from '../../components/products/ProductTable';
import ProductDetailsModal from '../../modals/productDetails';
import ConfirmDeleteModal from '../../modals/confirmDelete';
import Pagination from '../../shared/pagination';
import SearchInput from '../../shared/searchInput';
import { getProducts, deleteProduct } from '../../utils/services/productService';
import { filterProducts } from '../../utils/services/filterProducts';
import { paginate, getTotalPages } from '../../utils/services/paginate';
import { useTranslation } from '../../utils/services/useTranslation';
import { PRODUCTS_PAGE_SIZE } from '../../utils/pagination';
import type { Product } from '../../types/product';
import { Wrapper, Toolbar, EmptyMessage } from './Style';

const ProductsPage = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  // state مربوط به دو پنجره
  const [viewedProduct, setViewedProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasDeleteError, setHasDeleteError] = useState(false);

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

  const handleSearchChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const openDeleteModal = (product: Product) => {
    setHasDeleteError(false);
    setProductToDelete(product);
  };

  const closeDeleteModal = () => {
    if (!isDeleting) setProductToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (!productToDelete) return;

    setIsDeleting(true);
    setHasDeleteError(false);
    try {
      await deleteProduct(productToDelete.id);
      // API ذخیره واقعی نمی‌کند؛ از state حذف می‌کنیم
      setProducts((current) => current.filter((item) => item.id !== productToDelete.id));
      setProductToDelete(null);
    } catch {
      setHasDeleteError(true);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) return <p>{t.common.loading}</p>;
  if (hasError) return <p>{t.common.error}</p>;
  if (products.length === 0) return <p>{t.products.empty}</p>;

  const filteredProducts = filterProducts(products, query);
  const totalPages = getTotalPages(filteredProducts.length, PRODUCTS_PAGE_SIZE);
  const currentPage = Math.min(page, totalPages); // بعد از حذف، از آخرین صفحه بیرون نزن
  const visibleProducts = paginate(filteredProducts, currentPage, PRODUCTS_PAGE_SIZE);

  return (
    <Wrapper>
      <Toolbar>
        <SearchInput
          value={query}
          onChange={handleSearchChange}
          placeholder={t.products.searchPlaceholder}
          ariaLabel={t.common.search}
        />
      </Toolbar>

      {filteredProducts.length === 0 ? (
        <EmptyMessage>{t.products.noResults}</EmptyMessage>
      ) : (
        <>
          <ProductTable
            products={visibleProducts}
            onView={setViewedProduct}
            onDelete={openDeleteModal}
          />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}

      {viewedProduct && (
        <ProductDetailsModal product={viewedProduct} onClose={() => setViewedProduct(null)} />
      )}

      {productToDelete && (
        <ConfirmDeleteModal
          product={productToDelete}
          isDeleting={isDeleting}
          hasError={hasDeleteError}
          onConfirm={handleConfirmDelete}
          onCancel={closeDeleteModal}
        />
      )}
    </Wrapper>
  );
};

export default ProductsPage;