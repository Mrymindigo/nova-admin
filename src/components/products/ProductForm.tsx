import { useMemo } from 'react';
import { Formik } from 'formik';
import FormField from '../../shared/formField';
import { createProductSchema } from '../../validations/productSchema';
import { useTranslation } from '../../utils/services/useTranslation';
import { translateCategory } from '../../utils/services/translateCategory';
import { EMPTY_PRODUCT_FORM } from '../../utils/constants/productForm';
import type { NewProduct, ProductFormValues } from '../../types/product';
import { FormBody, SubmitError, Footer, CancelButton, SubmitButton } from './ProductFormStyle';

interface ProductFormProps {
  categories: string[];
  initialValues?: ProductFormValues;
  hasSubmitError: boolean;
  onSubmit: (payload: NewProduct) => Promise<void>;
  onCancel: () => void;
}

export default function ProductForm({
  categories,
  initialValues = EMPTY_PRODUCT_FORM,
  hasSubmitError,
  onSubmit,
  onCancel,
}: ProductFormProps) {
  const { t } = useTranslation();
  const validationSchema = useMemo(() => createProductSchema(t), [t]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await onSubmit({
          title: values.title.trim(),
          description: values.description.trim(),
          price: Number(values.price),
          category: values.category,
          image: values.image.trim(),
        });
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <FormBody onSubmit={handleSubmit} noValidate>
          <FormField
            name="title"
            label={t.products.form.fields.title}
            placeholder={t.products.form.placeholders.title}
          />
          <FormField
            name="description"
            as="textarea"
            label={t.products.form.fields.description}
            placeholder={t.products.form.placeholders.description}
          />
          <FormField
            name="price"
            type="number"
            dir="ltr"
            label={t.products.form.fields.price}
            placeholder={t.products.form.placeholders.price}
          />
          <FormField name="category" as="select" label={t.products.form.fields.category}>
            <option value="">{t.products.form.selectCategory}</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {translateCategory(t, category)}
              </option>
            ))}
          </FormField>
          <FormField
            name="image"
            type="url"
            dir="ltr"
            label={t.products.form.fields.image}
            placeholder={t.products.form.placeholders.image}
          />

          {hasSubmitError && <SubmitError role="alert">{t.products.form.error}</SubmitError>}

          <Footer>
            <CancelButton type="button" onClick={onCancel} disabled={isSubmitting}>
              {t.common.cancel}
            </CancelButton>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? t.products.form.submitting : t.products.form.submit}
            </SubmitButton>
          </Footer>
        </FormBody>
      )}
    </Formik>
  );
}