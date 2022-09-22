import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  font-size: 18px;
  font-family: 'Outfit', sans-serif;
}
html, body, #__next {
  height: 100%;
}
h1 {
  font-size: 6rem;
  @media screen and (max-width: 540px) {
    font-size: 5rem;
  }
}
h2 {
  font-size: 4rem;
  @media screen and (max-width: 540px) {
    font-size: 3rem;
  }
}
h3 {
  font-size: 3.2rem;
  @media screen and (max-width: 540px) {
    font-size: 2.4rem;
  }
}
h4 {
  font-size: 2.6rem;
  @media screen and (max-width: 540px) {
    font-size: 2rem;
  }
}
h5 {
  font-size: 2rem;
  @media screen and (max-width: 540px) {
    font-size: 1.9rem;
  }
}
h6 {
  font-size: 1.6rem;
  @media screen and (max-width: 540px) {
    font-size: 1.8rem;
  }
}
`;
