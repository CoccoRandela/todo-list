import styled from "styled-components";

export const CbContainerStyles = styled.div`  
    grid-column: 1 / span 2;
    grid-row: 3;

    header {
        display: flex;
        gap: 1em;
        align-items: center;
        margin-bottom: .5em;

        * {
        color: ${({theme}) => theme.colors.light}
        }

        h4 {
            margin: 0;
        }

        button {
            display: grid;
            justify-content: center;
        }

        button > svg {
            pointer-events: none;
            height: .5em;
            width: .5em;
            path {
                transition: stroke 0.2s linear 0.2s;
                fill: transparent;
                stroke: ${({theme}) => theme.colors.light}
            }
        }

        button:hover > svg {
            path {
                stroke: ${({theme}) => theme.colors.dark};
            }
        }

        button.active > svg {
            transform: rotate(90deg);
        }
    }

    div {
        display: grid;
        gap: .5em;
    }
`