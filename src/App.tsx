import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import { GlobalStyle } from './shared/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import { themes } from './shared/theme/index';
import { Language , Direction } from './types/Enums/Language';
import { useAppSelector } from './redux/hooks';


export const App = () => {
  const mode = useAppSelector((state) => state.settings.mode);
  const language = useAppSelector((state) => state.settings.language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === Language.Fa ? Direction.Rtl : Direction.Ltr;
  }, [language]);

  return (
    <ThemeProvider theme={themes[mode]}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};