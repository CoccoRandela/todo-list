import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({id, deleteItem}) {

    const navigate = useNavigate();

    const [item, setItem] = useState([])
    // const [title, setTitle] = useState(null);
    // const [description, setDescription] = useState(null);


    useEffect(() => {
        fetchProject()
    }, [])

    function fetchProject() {
        const response = JSON.parse(localStorage.getItem('projects'));
        const [ project ] = response.filter(project => {
            if (project.id === id) return project
        })
        if (project) {
            setItem(project)
        } else {
            setItem([]);
        }
    }

    function openProject() {
        navigate(`${item.id}`)
    }

    function handleEdit() {
        console.log(item, id)
        let projects = JSON.parse(localStorage.getItem('projects'));
        console.log(projects)
        projects = projects.map(project => {
            return (project.id === id )? item : project;
        })  
        console.log(projects) 
        localStorage.setItem('projects', JSON.stringify(projects))    
        fetchProject()
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