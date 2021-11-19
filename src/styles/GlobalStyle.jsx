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

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
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
