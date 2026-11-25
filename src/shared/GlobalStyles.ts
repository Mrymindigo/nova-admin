import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Vazirmatn Variable', sans-serif;
    line-height: 1.6;
    height:100vh;
    width:100%;
    overflow:hidden;
    text-decoration:none;
    background: ${({ theme }) => theme.colors.background};
  }
`;