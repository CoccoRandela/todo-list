import React,{ useState, useEffect }from "react";
import { useParams, useLocation } from "react-router";
import ModalForm from "./ModalForm";
import TodoCard from "./TodoCard";
import arrayComp from "../arraycomp";

export default function Project() {
    console.log('render projct page')

    // const params = useParams();
    // const projectId = Number(params.id);
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
                id: lastTodo ? lastTodo.id + 1 : 0,
                ...inputs,
                checkboxes: []
            }
        ]

        setTodos(newTodos)

        // project.todos = newTodos;

        // localStorage.setItem('projects', JSON.stringify(projects))

        // fetchTodos()
    }

    function deleteTodo(todoId) {
        const newTodos = todos.filter(todo => {
            return todo.id !== todoId
        })

        setTodos(newTodos);

        // localStorage.setItem('projects', JSON.stringify(projects))

        // fetchTodos()

    }

    // function editTodo(editedTodo) {

    //     setTodos(todos.map(todo => {
    //         return todo.id === editedTodo.id? editedTodo : todo;
    //     }))

    //     console.log(project.todos, todos, 'in the edit func')

    // }

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