import styled from "styled-components";

export const ButtonStyles = styled.button`
    display: inline-block;

    background-color: ${({theme}) => theme.colors.light};
    color: ${({theme}) => theme.colors.dark};
    padding: .5em 1em;
    border: none;
    border-radius: 1em;

`