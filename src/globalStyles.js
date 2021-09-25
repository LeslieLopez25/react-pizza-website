import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-dark-color: hsl(19.9,100%,36.7%);
  --primary-light-color: hsl(35.1,91.8%,62%);
  --secondary-dark-color: hsl(92.1,43.9%,38.4%);
  --secondary-light-color : hsl(39,100%,92.2%);
  --black: hsl(0,0%,0%);
  --white: hsl(0,0%,100%);
}

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Kanit', sans-serif;
  }
`;
