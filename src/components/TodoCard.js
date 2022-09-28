import React, { useState, useEffect } from "react";
import arrayComp from "../arraycomp";
import CheckboxContainer from "./CheckboxContainer";

export default function TodoCard({ todo, editTodo }) {

    const [checkboxes, setCheckboxes] = useState(todo.checkboxes);

    useEffect(() => {
        if(!arrayComp(todo.checkboxes, checkboxes)) {
            todo.checkboxes.push(checkboxes[checkboxes.length-1]);
            //editTodo(todo)
        }

    }, [checkboxes])

    function cardColor() {
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

    let cardTitle = <h3>{todo.title}</h3>

    let cardBtns = <>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => deleteItem(todo.id)}>Delete</button>        
    </>

    // if (edit) {
    //     cardTitle = <input type="text" defaultValue={item.title} onChange={(e) => setTitle(e.target.value)}/>;

    //     cardDescription = <input type="text" defaultValue={item.description} onChange={(e) => setDescription(e.target.value)}/>

    //     cardBtns = <>
    //         <button onClick={handleEdit}>Done</button>
    //         <button onClick={() => setEdit(false)}>Cancel</button>
    //     </> 
    // }

    return (
        <div style={{backgroundColor: cardColor()}} className="todo">

            <div>
                <button>{todo.priority}</button>
            </div>

            {cardTitle}

            {checkboxes && <CheckboxContainer checkboxes={checkboxes} addCheckbox={addCheckbox}/>}      
                  
            {cardBtns}

        </div>
    )
}