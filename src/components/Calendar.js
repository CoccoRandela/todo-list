//React Imports
import React, { useEffect, useState } from "react";
//Components
import Calendar from 'react-calendar';
import TodoCard from "./TodoCard";
//dayjs
import dayjs from 'dayjs';
//Firebase Imports
import { db, auth } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { fetchUserDoc } from "../services/user.service";


export default function CalendarPage() {

    const [modal, setModal] = useState(false);
    const [userTodos, setUserTodos] = useState([]);
    const [todosToDisplay, setTodostoDisplay] = useState([])
    const [modalContent, setModalContent] = useState(null)

    useEffect(() => {
        fetchUserTodos()
        .then(todos => setUserTodos(todos))
    }, [])

    function fetchUserTodos() {
        return fetchUserDoc()
        .then(userDoc => {
            return userDoc.data().projects;
        }).then(ids => {
            return getDocs(query(collection(db, 'todos'), where('projectId', 'in', ids)))
        })
        .then(snapshots => {
            const todos = snapshots.docs.map(s =>({...s.data(), id: s.id}))
            return todos;
        })
    }

    function assignClass({ date, view }) {
        if (userTodos.find(el => dayjs(el.dueDate, 'YYYY-MM-DD').format() === dayjs(date).format())) {
            return 'filled'
        }
    }

    function getTodosofDate(date) {
        return userTodos.filter(el => dayjs(el.dueDate, 'YYYY-MM-DD').format() === dayjs(date).format())   
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

    const cards = todosToDisplay.map(todo => {
        return <TodoCard todoInfo={todo}/>
    })


    return (
        <>
        {modal && <div className="modal">
                <div className="day-content">
                    <button onClick={() => setModal(false)}>Back</button>
                    {cards}
                </div>
            </div>}
        <Calendar tileClassName={assignClass}
        onClickDay={value => {
            setModal(true)
            setTodostoDisplay(getTodosofDate(value))
        }}/>
        </>
    )
}