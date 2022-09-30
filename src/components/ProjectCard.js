import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({id, deleteItem}) {

    const navigate = useNavigate();

    let projects = JSON.parse(localStorage.getItem('projects'))
    const [ project ] = projects.filter(project => {
        if (project.id === id) return project
    })

    const [item, setItem] = useState([])
    // const [title, setTitle] = useState(null);
    // const [description, setDescription] = useState(null);


    useEffect(() => {
        setItem(project)
    }, [])

    useEffect(() => {
        projects = projects.map(project => {
            return project.id === id ? item : project;
        })
        localStorage.setItem('projects', JSON.stringify(projects))
    }, [item])

    function openProject() {
        navigate(`${item.id}`)
    }

    return (
        <div className="project">
            <input type="text" defaultValue={item.title} onChange={(e) => {
                setItem({
                    ...item,
                    title: e.target.value
                })
            }} onBlur={() => handleEdit('title')}/>
            <input type="text" defaultValue={item.description} onChange={(e) => {
                setItem({
                    ...item,
                    description: e.target.value
                })
            }} onBlur={() => handleEdit('description')}/>
            <button onClick={openProject}>Open</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>     
        </div>
    )
}