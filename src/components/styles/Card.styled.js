import styled from "styled-components";

export const CardStyles = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;
    background-color: ${({theme}) => theme.colors.dark}    
`