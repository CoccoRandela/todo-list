import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100vh
    }

    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }
`