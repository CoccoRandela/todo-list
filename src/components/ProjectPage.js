import React,{ useState, useEffect }from "react";
import { useParams } from "react-router";
import ModalForm from "./ModalForm";
import TodoCard from "./TodoCard";
import arrayComp from "../arraycomp";

export default function Project() {
    console.log('render pp')

    const params = useParams();
    const projectId = Number(params.id);

    const  projects = JSON.parse(localStorage.getItem('projects'));

    console.log(projects)

    const [ project ] = projects.filter(project => project.id === projectId)


    const [modal, setModal] = useState(false);
    const [todos, setTodos] = useState([])

    console.log(project.todos, todos, 'outside')
    
    

    function openCloseModal() {
        setModal((modal === true)? false: true);
    }

    // useEffect(() => {
    //     console.log(project.todos)
    // }, [])

    useEffect(() => {
        console.log('inside', project.todos, todos)
        if (!arrayComp(project.todos, todos)) {
            console.log('here')
            project.todos.push(todos[todos.length-1])          
        }
        // localStorage.setItem('projects', JSON.stringify(projects)) 
        console.log(project.todos)
    }, [todos])

    function addTodo(inputs) {

        const [ lastTodo ] = todos.slice(-1);

        openCloseModal()

        setTodos([
            ...todos, { 
                id: lastTodo ? lastTodo.id + 1 : 0,
                ...inputs,
                checkboxes: []
            }
        ])

        console.log(project.todos, todos, 'in the create func')
    }

    function editTodo(editedTodo) {

        // const newTodos = todos.map(todo => {
        //     return todo.id === editedTodo.id? editedTodo : todo;
        // })

        // console.log(newTodos)

        setTodos(todos.map(todo => {
            return todo.id === editedTodo.id? editedTodo : todo;
        }))

        console.log(project.todos, todos, 'in the edit func')

    }

    const todoCards = todos.map(todo => {
        return (
            <TodoCard todo={todo} className="todo" editTodo={editTodo} key={todo.id}/>
        )
    })

    return (
        <div className="index">
            {modal && <ModalForm item="todo" className="modal prj-mod" options={['title', 'due date', 'priority']} addItem={addTodo} closeModal={openCloseModal}/>}

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