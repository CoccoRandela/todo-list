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
    font-size: 1.5rem;  

    &:hover {
        background-color: ${({theme}) => theme.colors.mid};
        color: ${({theme}) => theme.colors.dark};
    }
`

export const CardButtonStyles = styled(ButtonStyles)` 

    &:hover {
        background-color: ${({theme}) => theme.colors.mid};
        color: ${({theme}) => theme.colors.light};
    }
`

export const TodoButtonStyles = styled(ButtonStyles)` 

    background-color: transparent;
    font-size: ${({fs}) => fs? fs : '.9rem'};
    color: ${({theme}) => theme.colors.light};
    border: .1em solid ${({theme}) => theme.colors.light};


    &:hover {
        background-color: ${({theme}) => theme.colors.light};
        color: ${({theme}) => theme.colors.dark};
    }

`