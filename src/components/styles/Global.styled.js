import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    
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