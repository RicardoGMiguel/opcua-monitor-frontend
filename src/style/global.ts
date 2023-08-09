import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline:0;
  }

  body {
    background: #FFF ;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility !important;
  }

  body, input, button {
    font-size: 16px ;
    font-family: 'Poppins', sans-serif;
  }

  h1,h2,h3,h4,strong{
    font-weight: 500;
  }

  a{
    text-decoration:none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  @media (max-width: 1200px) {
    body, input, button {
      font-size: 14px;
    }
  }

  @media (max-width: 900px) {
    body, input, button {
      font-size: 12px;
    }
  }

  @media (max-width: 600px) {
    body, input, button {
      font-size: 10px;
    }
  }

`;
