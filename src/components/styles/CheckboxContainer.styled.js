import styled from "styled-components";

export const CbContainerStyles = styled.div`  
    grid-column: 1 / span 2;
    grid-row: 3;

    header {
        display: flex;
        gap: 1em;
        align-items: center;

        * {
        color: ${({theme}) => theme.colors.light}
        }

        h4 {
            margin: 0;
        }

        button  {
            transition: writing-mode 0.1s ease-in;
        }

        button.active  {
            writing-mode: vertical-rl;
        }
    }

    div {
        display: grid;
        gap: .5em;
    }
`