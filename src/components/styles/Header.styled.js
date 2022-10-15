import styled from "styled-components";

export const HeaderStyles = styled.header`
    padding: 1em;
    background-color: ${({theme}) => theme.colors.mid};
    color: ${({theme}) => theme.colors.light};

    h2 {
        margin: 0;
    }


`