
import { useEffect, useState } from "react";
import { getUsers } from '../../utils/services/userService'
import { filterUsers } from "../../utils/services/filterUsers";
import { useTranslation } from "../../utils/services/useTranslation";
import type { User } from '../../types/user';
import UserTable from '../../components/users/UserTable';
import { Wrapper, Toolbar } from "./Style";
import SearchInput from "../../shared/searchInput";


const UserPage = () => {

  const { t } = useTranslation();

  const [users, setUser] = useState<User[]>([])
  const [isLoading, setIsLOading] = useState(true)
  const [hasError, setHAsError] = useState(false)
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);


  useEffect(() => {
    const load = async () => {
      try {
        const data = await getUsers();
        setUser(data);
      }
      catch {
        setHAsError(true);
      }
      finally {
        setIsLOading(false);
      }
    };
    load();
  }, [])

  if (isLoading) return <p>{t.common.loading}</p>;
  if (hasError) return <p>{t.common.error}</p>;
  if (users.length === 0) return <p>{t.users.empty}</p>;

  const handleSearchChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };
  const filteredUsers = filterUsers(users, query);


  return (
    <Wrapper>
      <Toolbar>
        <SearchInput
          value={query}
          onChange={handleSearchChange}
          placeholder={t.users.searchPlaceholder}
          ariaLabel={t.common.search}
        />
      </Toolbar>
      <UserTable users={filteredUsers} />
    </Wrapper>
  );
}

export default UserPage