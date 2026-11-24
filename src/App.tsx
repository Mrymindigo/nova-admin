import AppRoutes from './routes/AppRoutes';
import {GlobalStyle} from './shared/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import {themes} from './shared/theme/index';
import {DarkLightMode} from './types/Enums/DarkLightMode'

export const App = () => {
    //replace redux
  const mode = DarkLightMode.Light;

  return (
    <ThemeProvider theme={themes[mode]}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};