import { createGlobalStyle } from "styled-components";
import "modern-normalize";
// @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

export const GlobalStyle = createGlobalStyle`
#root {
    margin-top: 100px;
  height: 100%;
}
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
        width: 100%;
        height: 100%;

 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul{
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  p{
    margin: 0 ;
    padding: 0;
  }
  h1  {
  margin-top  :40px ;
  }
  h2 {
    margin-top: 20px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }`;
