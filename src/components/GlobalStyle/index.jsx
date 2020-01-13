import { createGlobalStyle } from "styled-components"

export const pattern = {
  padding: 16,
  font: 'Lato',
  color: {
    primary: '#007efa'
  }
}

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${pattern.font};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
    overflow: hidden;
  }

  body {
    font-family: ${pattern.font};
    font-size: 16px;
    font-weight: 400;
    text-rendering: geometricPrecision;
    margin-top: 73px;
  }

  ul {
    list-style: none;
  }

  .grecaptcha-badge {
    display: none !important;
  }
`
