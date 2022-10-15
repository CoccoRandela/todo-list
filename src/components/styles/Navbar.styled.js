import styled from "styled-components";

export const NavbarStyles = styled.nav`
    display: flex;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.mid};
    padding-bottom: 1em;

    a {
        padding: 0 1em;
        text-decoration: none;
        color: ${({theme}) => theme.colors.light}
    }

    a ~ a {
        border-left: 1px solid ${({theme}) => theme.colors.light}
    }

`