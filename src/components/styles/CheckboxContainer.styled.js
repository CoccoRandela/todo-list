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

        button {
            background-color: ${({c}) => c};
            border: none;
            font-size: 1.5rem;
            transition: transform 0.1s ease-in;
        }

        button.active {
            transform: rotate(90deg)
        }
    }
`