import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Vazirmatn Variable', system-ui, -apple-system, 'Segoe UI', sans-serif;
    line-height: 1.6;
  }
`;