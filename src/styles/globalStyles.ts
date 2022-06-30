import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;
    font-family: 'Josefin Sans', sans-serif;;
  }

  body {
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
  } 
`;
