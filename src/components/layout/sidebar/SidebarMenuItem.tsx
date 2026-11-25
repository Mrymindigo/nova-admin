import { LuPackage, LuUsers, LuSettings } from 'react-icons/lu';
import { RxDashboard } from "react-icons/rx";
import { RoutePath } from '../../../types/Enums/RoutePath'
import type { SidebarItem } from '../../../types/sidebar'



export const menuItems: SidebarItem[] = [
    { Key: 'dashboard', icon: <RxDashboard />, path: RoutePath.Dashboard },
    { Key: 'products', icon: <LuPackage />, path: RoutePath.Products },
    { Key: 'users', icon: <LuUsers />, path: RoutePath.Users },
    { Key: 'settings', icon: <LuSettings />, path: RoutePath.Setting },
];

