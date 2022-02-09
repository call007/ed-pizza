import "normalize.css";
import "react-loading-skeleton/dist/skeleton.css";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  html {
    font-size: 1em;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-width: 320px;
    background-color: ${(props) => props.theme.colors.gray100};
    transition: ${(props) =>
      `background-color calc(${props.theme.transitionDuration} * 2)`};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: normal;
  }

  dd {
    margin-left: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
