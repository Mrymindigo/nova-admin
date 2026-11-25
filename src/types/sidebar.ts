import type { ReactNode } from 'react';
import type { Dictionary } from '../dictionary/index';

export interface SidebarItem {
  Key: keyof Dictionary['nav'];
  icon: ReactNode;
  path: string;
}