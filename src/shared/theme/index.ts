import { DarkLightMode } from '../../types/Enums/DarkLightMode';
import { lightTheme } from './light';
import { darkTheme } from './dark';

export const themes = {
  [DarkLightMode.Light]: lightTheme,
  [DarkLightMode.Dark]: darkTheme,
};