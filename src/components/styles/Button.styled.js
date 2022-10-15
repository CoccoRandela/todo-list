import styled from "styled-components";

export const ButtonStyles = styled.button`
    display: inline-block;
    background-color: ${({theme}) => theme.colors.light};
    color: ${({theme}) => theme.colors.dark};
    margin-right: ${({mr}) => mr};
    padding: .5em 1em;
    border: none;
    border-radius: 1em;
    transition: all 0.2s linear 0.2s;

    &:hover {
        transform: scale(1.05);
        background-color: ${({theme}) => theme.colors.dark};
        color: ${({theme}) => theme.colors.light};
    }

`

export const AddButtonStyles = styled(ButtonStyles)`
    background-color: ${({theme}) => theme.colors.dark}; 
    color: ${({theme}) => theme.colors.light};  

    &:hover {
        transform: scale(1.05);
        background-color: ${({theme}) => theme.colors.mid};
        color: ${({theme}) => theme.colors.dark};
    }
`