import React, { useState, useEffect } from "react";
import arrayComp from "../arraycomp";
import CheckboxContainer from "./CheckboxContainer";

export default function TodoCard({ todoInfo, projectId, deleteTodo }) {

    const [cardInfo, setCardInfo] = useState(todoInfo)
    // const [title, setTitle] = useState(todo.title);
    // const [dueDate, setDueDate] = useState(todo.dueDate);
    // const [priority, setPriority] = useState(todo.priority);
    // const [checkboxes, setCheckboxes] = useState([]);


    // useEffect(() => {
    //     console.log('inside')
    //     fetchTodo()
    // }, [])

    useEffect(() => {
        // condition necessary to avoid use in first render and infinite loop
        // if(Object.keys(cardInfo).length) {       
            const projects = JSON.parse(localStorage.getItem('projects'));
            const [ project ] = projects.filter(project => {
                if (project.id === projectId) return project;
            })
            const todos = project.todos.map(todo => {
                return (todo.id === todoInfo.id )? cardInfo : todo;
            })
            project.todos = [...todos];
            localStorage.setItem('projects', JSON.stringify(projects)) 
        // }   
    }, [cardInfo])

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
            setCardInfo(todo)
        } else {
            setCardInfo({})
        }
    }

    function addColor() {
        switch(cardInfo.priority) {
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
        switch (cardInfo.priority) {
            case 'low':
                setCardInfo({
                    ...cardInfo,
                    priority: 'medium'
                });
                break;
            case 'medium':
                setCardInfo({
                    ...cardInfo,
                    priority: 'high'
                });
                break;
            case 'high':
                setCardInfo({
                    ...cardInfo,
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
        const [ lastCheckbox ] = cardInfo.checkboxes.slice(-1);
    
        setCardInfo(
            {...cardInfo,
            checkboxes: 
                [...cardInfo.checkboxes,
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

        const newCheckboxes = cardInfo.checkboxes.filter(checkbox => 
            checkbox.id !== checkboxId
        )

        setCardInfo(
            {...cardInfo,
            checkboxes: newCheckboxes
            }
        )
    }

    function editCheckbox(editedCheckbox) {

        console.log(editedCheckbox)

        const newCheckboxes = cardInfo.checkboxes.map(checkbox => {
            return checkbox.id === editedCheckbox.id? editedCheckbox : checkbox;
        })

        setCardInfo(
            {...cardInfo,
            checkboxes: newCheckboxes
            }
        )

    }

    return (
        <div style={{backgroundColor: addColor()}} className="todo">

            <div>
                <button onClick={() => {
                    togglePriority()
                    }}>{cardInfo.priority}</button>
            </div>

            <input type="text" defaultValue={cardInfo.title} onChange={(e) => {
                setCardInfo({
                    ...cardInfo,
                    title: e.target.value
                })
            }}/>

            {cardInfo.checkboxes && <CheckboxContainer checkboxes={cardInfo.checkboxes} addCheckbox={addCheckbox} editCheckbox={editCheckbox} deleteCheckbox={deleteCheckbox}/>} 

            <input type="date" defaultValue={cardInfo.dueDate} onChange={(e) => {
                setCardInfo({
                    ...cardInfo,
                    dueDate: e.target.value
                })
            }}/>    

            <button onClick={() => deleteTodo(cardInfo.id)}>Delete</button>   

        </div>
    )
}