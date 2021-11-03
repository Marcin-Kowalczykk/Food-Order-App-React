import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --main-background-color: #41403f;
  --tomato-elements-color: #ff6347ca;
  --error-color: red;
  --white-font-color: white;
  --black-font-color: black;
  --white-background-color: white;
  --bold-elements-color: #c72d12;
  --dark-button-color: #5f3028;
  --dark-button-hover: #ad3824;
  --light-button-color: white;
  --light-button-hover: #b6b6b66f;
  --submit-button-color: #ccc;
}

* {
  font-family: "Open Sans", sans-serif;
}
body {
    margin: 0;
    padding: 0;
    background: var(--main-background-color);
  }
`;

export default GlobalStyle;
