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

export default function Project() {

    const {state} = useLocation()

    const [modal, setModal] = useState(false);
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    }, [])
    

    function fetchTodos() {
        getDoc(doc(db, 'projects', `${state.id}`))
        .then(projectSnap => {
            const todosIds = projectSnap.data().todos;
            const todoProms = [];
            todosIds.forEach(id => {
                const p = getDoc(doc(db, 'todos', `${id}`));
                todoProms.push(p)
            }) 
            return (Promise.all(todoProms))
        })
        .then(snapshots => {
            const todos = [];
            snapshots.forEach(s => {
                todos.push({
                    ...s.data(), id: s.id
                })
            })
            setTodos(todos)
        })
    }
    
    function openCloseModal() {
        setModal((modal === true)? false: true);
    }

    function addTodo(inputs) {
        openCloseModal()

        const newTodo = { 
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

    function deleteTodo(todoId) {
        const newTodos = todos.filter(todo => {
            return todo.id !== todoId
        })

        deleteDoc(doc(db, 'todos', `${todoId}`))
        .then(() => {
            updateDoc(doc(db, 'projects', `${state.id}`), {
                todos: arrayRemove(`${todoId}`)
            })
        })

        setTodos(newTodos);
    }

    const todoCards = todos.map(todo => {
        return (
            <TodoCard todoInfo={todo} projectId={state.id} className="todo" deleteTodo={deleteTodo} key={todo.id}/>
        )
    })

    return (
        <div className="index">
            {modal && <ModalForm item="todo" className="modal prj-mod" options={['title', 'dueDate', 'priority']} addItem={addTodo} closeModal={openCloseModal}/>}

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