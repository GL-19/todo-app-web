import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  } 
`;
