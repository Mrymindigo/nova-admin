import { useTranslation } from '../../../utils/services/useTranslation';
import { menuItems } from './SidebarMenuItem';
import SidebarSettings from './setting/index';
import SidebarProfile from '../profile/index';
import { Aside, SidebarNav, Logo , LogoIcon , LogoText } from './SidebarStyle';

import { HiMiniShoppingBag } from "react-icons/hi2";

export default function Sidebar (){
  const { t } = useTranslation();

  return (
    <Aside>
      <Logo>
        <LogoIcon>
          <HiMiniShoppingBag />
        </LogoIcon>
        <LogoText>
          NOVA
        </LogoText>
      </Logo>

      <nav>
        {menuItems.map(({ Key, icon, path }) => (
          <SidebarNav key={path} to={path}>
            {icon}
            <span>{t.nav[Key]}</span>
          </SidebarNav>
        ))}
      </nav>

      <SidebarSettings />

     <SidebarProfile />
    </Aside>
  );
};

