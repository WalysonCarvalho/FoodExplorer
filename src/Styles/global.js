import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
     
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    

  }

  ::-webkit-scrollbar {
  width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #2c2c31;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9e9ea0;
  }

  

  body,html  {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
    all: unset;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.7);
  }
`;
