import styled from "styled-components";

export const ModalStyles = styled.div`

    h3, p {
        margin: 1em 0;
    }

    padding: 1em;
    background-color: ${({theme}) => theme.colors.mid};
    border: 1px solid ${({theme}) => theme.colors.dark};
    border-radius: 1em;
    color: ${({theme}) => theme.colors.light};


`