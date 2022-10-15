import styled from "styled-components";

export const ModalStyles = styled.div`

    padding: 1em;
    background-color: ${({theme}) => theme.colors.mid};
    border: 1px solid ${({theme}) => theme.colors.dark};
    border-radius: 1em;
    color: ${({theme}) => theme.colors.light};

    h3, p {
        margin: 1em 0;
    }

    p {
        display: inline-block;
        margin-right: .5em;
    }




`