import { LuEye, LuPencil, LuTrash2 } from 'react-icons/lu';
import { useTranslation } from '../../utils/services/useTranslation';
import { formatPrice } from '../../utils/services/formatPrice';
import { translateCategory } from '../../utils/services/translateCategory';
import type { ProductTableProps } from '../../types/product';
import {
  TableCard,
  Table,
  Th,
  Tr,
  Td,
  TitleCell,
  ImageBox,
  ProductImage,
  ActionsCell,
  ActionsGroup,
  ActionButton,
} from '../../shared/table/TableStyle';

export default function ProductTable({ products, onView, onEdit, onDelete }: ProductTableProps) {
  const { t, language } = useTranslation();

  return (
    <TableCard>
      <Table>
        <thead>
          <tr>
            <Th>{t.products.columns.image}</Th>
            <Th>{t.products.columns.title}</Th>
            <Th>{t.products.columns.category}</Th>
            <Th>{t.products.columns.price}</Th>
            <Th>{t.products.columns.actions}</Th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>
                <ImageBox>
                  <ProductImage src={product.image} alt={product.title} />
                </ImageBox>
              </Td>
              <TitleCell>{product.title}</TitleCell>
              <Td>{translateCategory(t, product.category)}</Td>
              <Td>{formatPrice(product.price, language)}</Td>
              <ActionsCell>
                <ActionsGroup>
                  <ActionButton
                    type="button"
                    aria-label={t.products.actions.view}
                    title={t.products.actions.view}
                    onClick={() => onView(product)}
                  >
                    <LuEye />
                  </ActionButton>
                  <ActionButton
                    type="button"
                    aria-label={t.products.actions.edit}
                    title={t.products.actions.edit}
                    disabled={!onEdit}
                    onClick={() => onEdit?.(product)}
                  >
                    <LuPencil />
                  </ActionButton>
                  <ActionButton
                    type="button"
                    $variant="danger"
                    aria-label={t.products.actions.delete}
                    title={t.products.actions.delete}
                    onClick={() => onDelete(product)}
                  >
                    <LuTrash2 />
                  </ActionButton>
                </ActionsGroup>
              </ActionsCell>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableCard>
  );
}