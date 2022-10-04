import React, { useState, useEffect } from "react";
import arrayComp from "../arraycomp";
import CheckboxContainer from "./CheckboxContainer";

export default function TodoCard({ id, projectId, deleteTodo }) {

    const [todoInfo, setTodoInfo] = useState({})
    // const [title, setTitle] = useState(todo.title);
    // const [dueDate, setDueDate] = useState(todo.dueDate);
    // const [priority, setPriority] = useState(todo.priority);
    // const [checkboxes, setCheckboxes] = useState([]);


    useEffect(() => {
        console.log('inside')
        fetchTodo()
    }, [])

    useEffect(() => {
        // condition necessary to avoid use in first render and infinite loop
        if(Object.keys(todoInfo).length) {       
            const projects = JSON.parse(localStorage.getItem('projects'));
            const [ project ] = projects.filter(project => {
                if (project.id === projectId) return project;
            })
            const todos = project.todos.map(todo => {
                return (todo.id === id )? todoInfo : todo;
            })
            project.todos = [...todos];
            localStorage.setItem('projects', JSON.stringify(projects)) 
        }   
    }, [todoInfo])

    function fetchTodo() {
        const response = JSON.parse(localStorage.getItem('projects'));
        const [ project ] = response.filter(project => {
            if (project.id === projectId) return project;
        })
        const [ todo ] = project.todos.filter(todo => {
            if (todo.id === id) return todo;            
        })
        if(todo) {
            console.log('here')
            setTodoInfo(todo)
        } else {
            setTodoInfo({})
        }
    }

    function addColor() {
        switch(todoInfo.priority) {
            case 'low':
                return 'green';
                break;
            case 'medium':
                return 'yellow';
                break;
            case 'high':
                return 'red';
                break;
        }
    }

    function togglePriority() {
        switch (todoInfo.priority) {
            case 'low':
                setTodoInfo({
                    ...todoInfo,
                    priority: 'medium'
                });
                break;
            case 'medium':
                setTodoInfo({
                    ...todoInfo,
                    priority: 'high'
                });
                break;
            case 'high':
                setTodoInfo({
                    ...todoInfo,
                    priority: 'low'
                });
                break;
        }
    }

    function handleEdit() {
        // console.log(todoInfo)
        // const projects = JSON.parse(localStorage.getItem('projects'));
        // const [ project ] = projects.filter(project => {
        //     if (project.id === projectId) return project;
        // })
        // const todos = project.todos.map(todo => {
        //     return (todo.id === id )? todoInfo : todo;
        // })
        // project.todos = todos;
        // // switch (info) {
        // //     case 'title':
        // //         todo.title = title;
        // //         break;
        // //     case 'dueDate':
        // //         todo.dueDate = dueDate;
        // //     case 'priority':
        // //         todo.priority = priority;
        // // }

        // localStorage.setItem('projects', JSON.stringify(projects))    
        // fetchTodo()

        // editTodo(todo);
    }

    function addCheckbox() {
        const [ lastCheckbox ] = todoInfo.checkboxes.slice(-1);
    
        setTodoInfo(
            {...todoInfo,
            checkboxes: 
                [...todoInfo.checkboxes,
                    { 
                    id: lastCheckbox ? lastCheckbox.id + 1 : 0,
                    completed: false,
                    task: '',
                    }
                ]
            }
        )
    }

    function deleteCheckbox(checkboxId) {

        const newCheckboxes = todoInfo.checkboxes.filter(checkbox => 
            checkbox.id !== checkboxId
        )

        setTodoInfo(
            {...todoInfo,
            checkboxes: newCheckboxes
            }
        )
    }

    function editCheckbox(editedCheckbox) {

        console.log(editedCheckbox)

        const newCheckboxes = todoInfo.checkboxes.map(checkbox => {
            return checkbox.id === editedCheckbox.id? editedCheckbox : checkbox;
        })

        setTodoInfo(
            {...todoInfo,
            checkboxes: newCheckboxes
            }
        )

    }

    return (
        <div style={{backgroundColor: addColor()}} className="todo">

            <div>
                <button onClick={() => {
                    togglePriority()
                    }}>{todoInfo.priority}</button>
            </div>

            <input type="text" defaultValue={todoInfo.title} onChange={(e) => {
                setTodoInfo({
                    ...todoInfo,
                    title: e.target.value
                })
            }}/>

            {todoInfo.checkboxes && <CheckboxContainer checkboxes={todoInfo.checkboxes} addCheckbox={addCheckbox} editCheckbox={editCheckbox} deleteCheckbox={deleteCheckbox}/>} 

            <input type="date" defaultValue={todoInfo.dueDate} onChange={(e) => {
                setTodoInfo({
                    ...todoInfo,
                    dueDate: e.target.value
                })
            }}/>    

            <button onClick={() => deleteTodo(todoInfo.id)}>Delete</button>   

        </div>
    )
}