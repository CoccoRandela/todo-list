import React, { useState } from "react";
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import TodoCard from "./TodoCard";


export default function CalendarPage() {

    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(null)

    function assignClass({ date, view }) {
        const projects = JSON.parse(localStorage.getItem('projects'))
        let contentToDisplay = [];
        projects.forEach(project => {
            const todos = project.todos;
            todos.forEach(todo => contentToDisplay.push(todo))
            
        })
        // contentToDisplay.forEach(content => {
        //     console.log(dayjs(content.dueDate, 'YYYY-MM-DD').$d)
        // })
        if (contentToDisplay.find(el => {
            return dayjs(el.dueDate, 'YYYY-MM-DD').format() === dayjs(date).format()
        })) {
            return 'filled'
        }
    }

    function displayTodos(value) {
        console.log(value)
        const projects = JSON.parse(localStorage.getItem('projects'))
        let contentToDisplay = [];
        projects.forEach(project => {
            const todos = project.todos;
            todos.forEach(todo => contentToDisplay.push(todo))
        }) 
        contentToDisplay.forEach(el => {
            if(dayjs(el.dueDate, 'YYYY-MM-DD').format() === dayjs(value).format()) {
                setModal(true)
            }
        })
        const cards = contentToDisplay.map(el => {
            if(dayjs(el.dueDate, 'YYYY-MM-DD').format() === dayjs(value).format()) {
                return <TodoCard todoInfo={el} />
            }
        })

        setModalContent(cards)
        
    }    


    return (
        <>
        {modal && <div className="modal">
                <button onClick={() => setModal(false)}>Back</button>
                {modalContent}
            </div>}
        <Calendar tileClassName={assignClass}
        onClickDay={displayTodos}/>
        </>
    )
}