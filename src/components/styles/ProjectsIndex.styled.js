import styled from "styled-components";

export const ProjectsIndexStyles = styled.div`
    padding: 1em;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            margin: 0;
            color: ${({theme}) => theme.colors.dark};
        }
    }
`