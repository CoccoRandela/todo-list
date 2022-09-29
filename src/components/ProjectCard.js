import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProjectCard({item, deleteItem, editItem}) {
    const navigate = useNavigate();

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);

    function openProject() {
        navigate(`${item.id}`)
    }


    function handleEdit() {
        editItem(item, title, description);
        setEdit(false)
    }

    let cardTitle = <h3>{item.title}</h3>

    let cardDescription = <p>{item.description}</p>;

    let cardBtns = <>
        <button onClick={openProject}>Open</button>
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


    return (
        <div className="project">

            {cardTitle}

            {cardDescription}    
                  
            {cardBtns}

        </div>
    )
}