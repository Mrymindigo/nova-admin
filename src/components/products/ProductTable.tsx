import { useTranslation } from '../../utils/services/useTranslation';
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
} from './ProductTableStyle';

export default function ProductTable({ products }: ProductTableProps) {
  const { t } = useTranslation();

  return (
    <TableCard>
      <Table>
        <thead>
          <tr>
            <Th>{t.products.columns.image}</Th>
            <Th>{t.products.columns.title}</Th>
            <Th>{t.products.columns.category}</Th>
            <Th>{t.products.columns.price}</Th>
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
              <Td>{product.category}</Td>
              <Td>{product.price}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableCard>
  );
}