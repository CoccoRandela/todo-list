import styled from "styled-components";

export const FormStyles = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 1em 0;

    input {
        padding: .5em 1em;
        border-radius: 1em;
        border: none;
        color: ${({theme}) => theme.colors.dark}
    }

    select {
        padding: .5em 1em;
        border-radius: 1em;
        border: none;
        color: ${({theme}) => theme.colors.dark}
    }

`