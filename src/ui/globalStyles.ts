import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme, resetCSS } from ".";

export const GlobalStyles = createGlobalStyle`
${resetCSS};
html[theme=dark] {
  ${darkTheme}
}
html[theme=light] {
  ${lightTheme}
}
html {
  font-family: Arial, Helvetica, sans-serif;
}
`;
