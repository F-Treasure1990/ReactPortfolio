import { createGlobalStyle } from "styled-components";

// Josh Comeau's recommended global reset - https://www.joshwcomeau.com/css/custom-css-reset/#digit-tweaking-line-height
export const GlobalReset = createGlobalStyle`
  /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
2. Remove default margin
*/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100vh;
}

html {
  background-color: ${({ theme }) => theme?.palette?.secondary};
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  background-color: #282A36;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family:'CascadiaCode' ;
  max-width: 1048px;
  margin: 0 auto;
  padding: 24px;
  /* transition: padding ease 0.3s; */
   ${({ theme }) => theme?.mediaQ.customDown(500)} {
   padding:12px ;
 }
 ${({ theme }) => theme?.mediaQ.customDown(450)} {
  padding:0px ;
}
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

`;
