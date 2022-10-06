import React,{ useState, useEffect }from "react";
import { useParams, useLocation } from "react-router";
import ModalForm from "./ModalForm";
import TodoCard from "./TodoCard";
import arrayComp from "../arraycomp";

export default function Project() {

    const {state} = useLocation()

    const [modal, setModal] = useState(false);
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    }, [])

    useEffect(() => {
        const  projects = JSON.parse(localStorage.getItem('projects'));
        const [ project ] = projects.filter(project => project.id === state.id)
        project.todos = [...todos]
        localStorage.setItem('projects', JSON.stringify(projects))
    }, [todos])
    

    function fetchTodos() {
        const  projects = JSON.parse(localStorage.getItem('projects'));
        const [ project ] = projects.filter(project => project.id === state.id)
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
                prjId: state.id,
                id: lastTodo ? lastTodo.id + 1 : 0,
                ...inputs,
                checkboxes: []
            }
        ]
        setTodos(newTodos)
    }

    function deleteTodo(todoId) {
        const newTodos = todos.filter(todo => {
            return todo.id !== todoId
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