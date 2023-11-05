import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
  }
  body {
    background-color: #242424;;
    
  }
`;