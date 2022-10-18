import styled from "styled-components";

export const CalendarStyles = styled.div`
    
    .react-calendar {    
        max-width: 90%;   
        padding: 1em;
        margin: 2em auto;
        border: .1em solid ${({theme}) => theme.colors.dark};
        border-radius: 1em;
    }

    .react-calendar__month-view__weekdays {
        text-align: center;
    }

    .react-calendar button {
        background-color: ${({theme}) => theme.colors.light};
        color: ${({theme}) => theme.colors.dark};
        padding: .5em 1em;
        border: .1em solid transparent;
        border-radius: 1em;
        transition: all 0.1s linear;
    
        &:hover {
            background-color: ${({theme}) => theme.colors.dark};
            color: ${({theme}) => theme.colors.light};
        }
    }

    .react-calendar button.filled {
        background-color: ${({theme}) => theme.colors.dark};
        color: ${({theme}) => theme.colors.light};
        padding: .5em 1em;
        border: .1em solid transparent;
        border-radius: 1em;
        transition: all 0.1s linear;
    
        &:hover {
            background-color: ${({theme}) => theme.colors.light};
            color: ${({theme}) => theme.colors.dark};
            border: .1em solid ${({theme}) => theme.colors.dark};
        }
    }

`