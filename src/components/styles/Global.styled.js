import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body, #root {
        min-height: 100vh
    }

    body {
        margin: 0;
        background-color: ${({theme}) => theme.colors.light}
    }
`