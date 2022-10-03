import React,{ useState, useEffect }from "react";
import { useParams } from "react-router";
import ModalForm from "./ModalForm";
import TodoCard from "./TodoCard";
import arrayComp from "../arraycomp";

export default function Project() {
    console.log('render projct page')

    const params = useParams();
    const projectId = Number(params.id);

    const  projects = JSON.parse(localStorage.getItem('projects'));

    const [ project ] = projects.filter(project => project.id === projectId)


    const [modal, setModal] = useState(false);
    const [todos, setTodos] = useState([])


    useEffect(() => {
        fetchTodos()
    }, [])

    // useEffect(() => {
    //     project.todos = [...todos]
    //     localStorage.setItem('projects', JSON.stringify(projects))
    // }, [todos])
    
    function fetchTodos() {
        const response = project.todos;
        if (response) {
            setTodos(response);
        } else {
            setTodos([])
        }
        
    }
    
    function openCloseModal() {
        setModal((modal === true)? false: true);
    }

    function addTodo(inputs) {

        const [ lastTodo ] = todos.slice(-1);

        openCloseModal()

        const newTodos = [
            ...todos, { 
                id: lastTodo ? lastTodo.id + 1 : 0,
                ...inputs,
                checkboxes: []
            }
        ]

        project.todos = newTodos;

        localStorage.setItem('projects', JSON.stringify(projects))

        fetchTodos()
    }

    function deleteTodo(todoId) {
        setTodos(todos.filter(todo => {
            return todo.id !== todoId
        }))
    }

    function editTodo(editedTodo) {

        setTodos(todos.map(todo => {
            return todo.id === editedTodo.id? editedTodo : todo;
        }))

        console.log(project.todos, todos, 'in the edit func')

    }

    const todoCards = todos.map(todo => {
        return (
            <TodoCard id={todo.id} projectId={projectId} className="todo" editTodo={editTodo} deleteTodo={deleteTodo} key={todo.id}/>
        )
    })

    return (
        <div className="index">
            {modal && <ModalForm item="todo" className="modal prj-mod" options={['title', 'dueDate', 'priority']} addItem={addTodo} closeModal={openCloseModal}/>}

            <header className="prj-head">    
                <h1>{project.title}</h1>
                <button className="add-todo-btn" onClick={openCloseModal}>+</button>
            </header>

            <div className="todos">
                {todoCards}
            </div>    
        </div>
    )
}