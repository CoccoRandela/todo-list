import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckboxContainer from "./CheckboxContainer";

export default function Card({item, className, deleteItem, editItem}) {

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [checkboxes, setCheckboxes] = useState(item.checkboxes);

    function handleEdit() {
        editItem(item, title, description);
        setEdit(false)
    }

    let cardTitle = item.todos ? <h3>
        <Link to={`${item.id}`}>{item.title}</Link>
        </h3> : <h3>{item.title}</h3>;

    let cardDescription = <p>{item.description}</p>;

    let cardBtns = <>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>        
    </>

    if (edit) {
        cardTitle = <input type="text" defaultValue={item.title} onChange={(e) => setTitle(e.target.value)}/>;

        cardDescription = <input type="text" defaultValue={item.description} onChange={(e) => setDescription(e.target.value)}/>

        cardBtns = <>
            <button onClick={handleEdit}>Done</button>
            <button onClick={() => setEdit(false)}>Cancel</button>
        </> 
    }

    const cardColor = () => {
        switch(item.priority) {
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


    return (
        <div style={{
            backgroundColor: cardColor()
        }} className={className}>
            {item.priority && <div><button>{item.priority}</button></div>}
            {cardTitle}
            {description && cardDescription}
            {checkboxes && <CheckboxContainer checkboxes={checkboxes}/>}            
            {cardBtns}
        </div>
    )
}