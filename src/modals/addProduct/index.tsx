import { useEffect, useState } from 'react';
import Modal from '../../shared/modal';
import ProductForm from '../../components/products/ProductForm';
import { createProduct, getCategories } from '../../utils/services/productService';
import { useTranslation } from '../../utils/services/useTranslation';
import type { NewProduct, Product } from '../../types/product';

interface AddProductModalProps {
    onClose: () => void;
    onCreated: (product: Product) => void;
}

export default function AddProductModal({ onClose, onCreated }: AddProductModalProps) {
    const { t } = useTranslation();

    const [categories, setCategories] = useState<string[]>([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [hasCategoriesError, setHasCategoriesError] = useState(false);
    const [hasSubmitError, setHasSubmitError] = useState(false);

    useEffect(() => {
        const load = async () => {
            try {
                setCategories(await getCategories());
            } catch {
                setHasCategoriesError(true);
            } finally {
                setIsLoadingCategories(false);
            }
        };
        load();
    }, []);

    const handleSubmit = async (payload: NewProduct) => {
        setHasSubmitError(false);
        try {
            onCreated(await createProduct(payload));
        } catch {
            setHasSubmitError(true);
        }
    };

    return (
        <Modal title={t.products.form.title} closeLabel={t.common.close} onClose={onClose}>
            {isLoadingCategories && <p>{t.common.loading}</p>}
            {hasCategoriesError && <p role="alert">{t.products.form.categoriesError}</p>}
            {!isLoadingCategories && !hasCategoriesError && (
                <ProductForm
                    categories={categories}
                    hasSubmitError={hasSubmitError}
                    onSubmit={handleSubmit}
                    onCancel={onClose}
                />
            )}
        </Modal>
    );
}