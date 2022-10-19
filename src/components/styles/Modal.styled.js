import styled from "styled-components";

export const ModalStyles = styled.div`

    padding: 1em;
    background-color: ${({theme}) => theme.colors.mid};
    border: 1px solid ${({theme}) => theme.colors.dark};
    border-radius: 1em;
    color: ${({theme}) => theme.colors.light};
    width: minmax(100ch, 50%);
    margin: 0 auto;

    h3, p {
        margin: 0;
    }

    p {
        display: inline-block;
        margin-right: .5em;
    }




`