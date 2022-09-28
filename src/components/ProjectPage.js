import React,{ useState, useEffect }from "react";
import { useParams } from "react-router";
import ModalForm from "./ModalForm";
import Card from "./Card";

export default function Project() {
    const params = useParams();
    const projectId = Number(params.id);
    const  projects = JSON.parse(localStorage.getItem('projects'));
    const [ project ] = projects.filter(project => project.id === projectId)


    const [modal, setModal] = useState(false);
    const [todos, setTodos] = useState(project.todos)

    function openCloseModal() {
        setModal((modal === true)? false: true);
    }

    useEffect(() => {
        project.todos = todos;
        localStorage.setItem('projects', JSON.stringify(projects))
    }, [todos])

    function addTodo(inputs) {

        console.log(inputs)
        
        const [ lastTodo ] = todos.slice(-1);

        openCloseModal()

        setTodos([
            ...todos, { 
                id: lastTodo ? lastTodo.id + 1 : 0,
                ...inputs,
                checkboxes: []
            }
        ])
    }

    const todoCards = todos.map(todo => {
        return (
            <Card item={todo} className="todo" key={todo.id}/>
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