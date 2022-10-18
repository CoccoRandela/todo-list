import styled from "styled-components";

export const ModalContainerStyles = styled.div`
    position: absolute;
    top: 0;
    min-width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: ${({pi}) => pi? pi: 'center'};
    background-color: rgba(255, 255, 255, ${({opacity}) => opacity});

`