import { useTranslation } from '../../utils/services/useTranslation';
import { TableCard, Table, Th, Tr, Td } from '../../shared/table/TableStyle';
import type { UserTableProps } from '../../types/user';

export default function UserTable({ users }: UserTableProps) {
  const { t } = useTranslation();

  return (
    <TableCard>
      <Table>
        <thead>
          <tr>
            <Th>{t.users.columns.name}</Th>
            <Th>{t.users.columns.username}</Th>
            <Th>{t.users.columns.email}</Th>
            <Th>{t.users.columns.phone}</Th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>
                {user.name.firstname} {user.name.lastname}
              </Td>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableCard>
  );
}