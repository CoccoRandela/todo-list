import React, { useState, useEffect } from "react";
import arrayComp from "../arraycomp";
import CheckboxContainer from "./CheckboxContainer";

export default function TodoCard({ todo, editTodo, deleteTodo }) {

    const [title, setTitle] = useState(todo.title);
    const [dueDate, setDueDate] = useState(todo.dueDate);
    const [checkboxes, setCheckboxes] = useState([]);

    useEffect(() => {
        setCheckboxes(todo.checkboxes)
    }, [])

    useEffect(() => {
        console.log('here')
        todo.checkboxes = [...checkboxes];
        editTodo(todo)
    }, [checkboxes])

    function addColor() {
        switch(todo.priority) {
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

    function handleEdit(info) {
        switch (info) {
            case 'title':
                todo.title = title;
                break;
            case 'dueDate':
                todo.dueDate = dueDate;
        }

        editTodo(todo);
    }

    function addCheckbox() {
        
        const [ lastCheckbox ] = checkboxes.slice(-1);

        setCheckboxes([
            ...checkboxes, { 
                id: lastCheckbox ? lastCheckbox.id + 1 : 0,
                completed: false,
                task: '',
            }
        ])

    }

    function editCheckbox(editedCheckbox) {

        console.log(editedCheckbox)

        setCheckboxes(checkboxes.map(checkbox => {
            return checkbox.id === editedCheckbox.id? editedCheckbox : checkbox;
        }))

    }


    return (
        <div style={{backgroundColor: addColor()}} className="todo">

            <div>
                <button>{todo.priority}</button>
            </div>

            <input type="text" defaultValue={todo.title} onChange={(e) => {
                setTitle(e.target.value)
            }} onBlur={() => handleEdit('title')}/>

            {checkboxes && <CheckboxContainer checkboxes={checkboxes} addCheckbox={addCheckbox} editCheckbox={editCheckbox}/>} 

            <input type="date" defaultValue={todo.dueDate} onChange={(e) => {
                setDueDate(e.target.value)
            }} onBlur={() => handleEdit('dueDate')}/>    

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>   

        </div>
    )
}