import styled from "styled-components";

export const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    padding: 2em 0;
    margin: 0 auto;
    background-color: ${({theme}) => theme.colors.mid};
    color: ${({theme}) => theme.colors.light};
    h2 {
        margin: 0;
    }
`

export const MainHeaderStyles = styled(HeaderStyles)`
    background-color: ${({theme}) => theme.colors.light};
    color: ${({theme}) => theme.colors.dark};
    align-items: center;
    h1 {
        margin: 0;
        color: ${({theme}) => theme.colors.dark};
    }
`