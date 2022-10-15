//React Imports
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
//Components
import ModalForm from "./ModalForm";
import TodoCard from "./TodoCard";
//Firebase Imports
import { db } from "../services/firebase";
import {
  getDoc,
  doc,
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  arrayUnion,
  deleteDoc,
  arrayRemove,
} from "firebase/firestore";

import { deleteTodofromDatabase } from "../services/todo.service";

export default function Project() {

    const {state} = useLocation()

    const [modal, setModal] = useState(false);
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
        .then(todos => setTodos(todos))
    }, [])
    

    function fetchTodos() {
        return getDoc(doc(db, 'projects', `${state.id}`))
        .then(projectSnap => {
            const todosIds = projectSnap.data().todos;
            const todoProms = todosIds.map(id => getDoc(doc(db, 'todos', `${id}`))) 
            return (Promise.all(todoProms))
        })
        .then(snapshots => {
            const todos = snapshots.map(s =>({...s.data(), id: s.id}));

            return todos;
        })
    }
    
    function openCloseModal() {
        setModal((modal === true)? false: true);
    }

    function addTodo(inputs) {
        openCloseModal()

        const newTodo = {
            projectId: state.id,
            createdAt: serverTimestamp(),
            ...inputs,
            checkboxes: []
        }

        addDoc(collection(db, 'todos'), newTodo)
        .then(docRef => {
            updateDoc(doc(db, 'projects', `${state.id}`), {
                todos: arrayUnion(docRef.id)
            })
            setTodos([...todos, {
                ...newTodo,
                id: docRef.id
            }])
        })
    }

    function deleteTodo(todo) {
        const newTodos = todos.filter(item => {
            return item.id !== todo.id
        })

        deleteTodofromDatabase(todo);

        setTodos(newTodos);
    }

    const todoCards = todos.map(todo => {
        return (
            <TodoCard todoInfo={todo}  className="todo" deleteTodo={deleteTodo} key={todo.id}/>
        )
    })

    return (
        <div className="index">
            {modal && <ModalForm item="todo" options={['title', 'dueDate', 'priority']} addItem={addTodo} closeModal={openCloseModal}/>}

            <header className="prj-head">    
                <h1>{state.title}</h1>
                <button className="add-todo-btn" onClick={openCloseModal}>+</button>
            </header>

            <div className="todos">
                {todoCards}
            </div>    
            
        </div>
    )
}