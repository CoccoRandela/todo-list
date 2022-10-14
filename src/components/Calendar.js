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
import { deleteTodofromDatabase } from "../services/todo.service";


export default function CalendarPage() {

    const [modal, setModal] = useState(false);
    const [userTodos, setUserTodos] = useState([]);
    const [todosToDisplay, setTodostoDisplay] = useState([])
    const [modalContent, setModalContent] = useState(null)

    useEffect(() => {
        fetchUserTodos()
        .then(todos => setUserTodos(todos))
    }, [todosToDisplay])

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
        return userTodos.filter(todo => dayjs(todo.dueDate, 'YYYY-MM-DD').format() === dayjs(date).format())   
    }    

    function deleteTodo(todo) {
        const newTodosToDisplay = todosToDisplay.filter(item => item.id !== todo.id);
        deleteTodofromDatabase(todo)
        setTodostoDisplay(newTodosToDisplay);
        if(newTodosToDisplay.length === 0) {
            setModal(false);
        }
    }

    const cards = todosToDisplay.map(todo => {
        return <TodoCard todoInfo={todo} deleteTodo={deleteTodo} key={todo.id}/>
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