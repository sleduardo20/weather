import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    font-family: 'Roboto';
  }

  body, html{
    width: 100%;
    height: 100%;
  }

  html{
    background:linear-gradient(180deg,#f1f6fa,#cadae6);

  }



  button, input{
    border: 0;
    background: none;
  }

  button{
    cursor: pointer;
  }

  :root{
    --primary: #537EBE;
    --line: #BCD1EF;
    --white: #fff;
    --gray:#848484;
  }

`;
