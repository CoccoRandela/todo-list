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
        const projects = JSON.parse(localStorage.getItem('projects'))
        console.log(projects)
        let contentToDisplay = [];
        projects.forEach(project => {
            const todos = [...project.todos];
            todos.forEach(todo => contentToDisplay.push(todo))
        }) 
        console.log(contentToDisplay, 'content')
        contentToDisplay.forEach(el => {
            if(dayjs(el.dueDate, 'YYYY-MM-DD').format() === dayjs(value).format()) {
                setModal(true)
            }
        })
        const cards = contentToDisplay.map(el => {
            if(dayjs(el.dueDate, 'YYYY-MM-DD').format() === dayjs(value).format()) {
                return <TodoCard todoInfo={el} key={contentToDisplay.indexOf(el)}deleteTodo={() => deleteTodo(el, value)}/>
            }
        })

        setModalContent(cards)

        return cards;
        
    }    

    function deleteTodo(el, value) {
        const projects = JSON.parse(localStorage.getItem('projects')); 
        const [ project ] = projects.filter(
            project => project.id === el.prjId
            )
        console.log(project, 'project')
        project.todos = project.todos.filter(todo => todo.id !== el.id)
        console.log(projects)
        localStorage.setItem('projects', JSON.stringify(projects))
        displayTodos(value);
        setModal(false);
    }


    return (
        <>
        {modal && <div className="modal">
                <div className="day-content">
                    <button onClick={() => setModal(false)}>Back</button>
                    {modalContent}
                </div>
            </div>}
        <Calendar tileClassName={assignClass}
        onClickDay={displayTodos}/>
        </>
    )
}