import Modal from '../../shared/modal';
import { useTranslation } from '../../utils/services/useTranslation';
import { interpolate } from '../../utils/services/translate';
import type { Product } from '../../types/product';
import { Message, ErrorText, Footer, CancelButton, DeleteButton } from './Style';

interface ConfirmDeleteModalProps {
  product: Product;
  isDeleting: boolean;
  hasError: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDeleteModal({
  product,
  isDeleting,
  hasError,
  onConfirm,
  onCancel,
}: ConfirmDeleteModalProps) {
  const { t } = useTranslation();

  return (
    <Modal title={t.products.deleteConfirm.title} closeLabel={t.common.close} onClose={onCancel}>
      <Message>{interpolate(t.products.deleteConfirm.message, { title: product.title })}</Message>
      {hasError && <ErrorText role="alert">{t.products.deleteConfirm.error}</ErrorText>}
      <Footer>
        <CancelButton type="button" onClick={onCancel} disabled={isDeleting}>
          {t.common.cancel}
        </CancelButton>
        <DeleteButton type="button" onClick={onConfirm} disabled={isDeleting}>
          {isDeleting ? t.common.deleting : t.common.delete}
        </DeleteButton>
      </Footer>
    </Modal>
  );
}