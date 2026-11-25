import Modal from '../../shared/modal';
import { useTranslation } from '../../utils/services/useTranslation';
import { formatPrice } from '../../utils/services/formatPrice';
import { translateCategory } from '../../utils/services/translateCategory';
import type { Product } from '../../types/product';
import { Image, ProductTitle, List, Term, Detail } from './Style';

interface ProductDetailsModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps) {
  const { t, language } = useTranslation();

  return (
    <Modal title={t.products.title} closeLabel={t.common.close} onClose={onClose}>
      <Image src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <List>
        <Term>{t.products.details.category}</Term>
        <Detail>{translateCategory(t, product.category)}</Detail>
        <Term>{t.products.details.price}</Term>
        <Detail>{formatPrice(product.price, language)}</Detail>
        <Term>{t.products.details.rating}</Term>
        <Detail>
          {product.rating.rate} ({product.rating.count})
        </Detail>
        <Term>{t.products.details.description}</Term>
        <Detail>{product.description}</Detail>
      </List>
    </Modal>
  );
}