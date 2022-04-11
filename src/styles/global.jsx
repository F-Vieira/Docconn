import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --blue: #3B9EC8;
    --light_blue: #CDE7FF;
    --dark_blue: #283349;
    --dark_blue_transparent: #28334970;
    --dark_green: #272D2D;
    --gray: #A39999;
    --white: #F2F2F2;

    --primary_font: 'Roboto', sans-serif;
    --secundary_font: 'Beau Rivage', cursive;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: var(--primary_font);
  }

  body {
    color: var(--dark_blue);
  }

  h1, h2, h3, h4 {
    font-size: 100%;
    font-weight: normal;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
