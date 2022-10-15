import styled from "styled-components";

export const CardStyles = styled.div`

    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    row-gap: .5em;
    background-color: ${({theme}) => theme.colors.dark};
    padding: 1em;
    border-radius: 1em;

    input {
        max-width: fit-content;
        background-color: transparent;
        color: ${({theme}) => theme.colors.light};
        border: none;
    }

    input:first-of-type {
        font-size: 1.1rem;
    }

    input ~ input {
        font-style: italic;
        font-size: 0.8rem;
    }

    input:focus {
        outline: none;
    }
`