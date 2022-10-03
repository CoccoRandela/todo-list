import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({id, deleteProject}) {

    const navigate = useNavigate();

    const [cardInfo, setCardInfo] = useState([])

    useEffect(() => {
        fetchProject()
        console.log(cardInfo, 'in use effect')
    }, [])    
    
    useEffect(() => {
        if (Object.keys(cardInfo).length) {
            let projects = JSON.parse(localStorage.getItem('projects'));
            console.log(projects)
            projects = projects.map(project => {
                return (project.id === id )? cardInfo : project;
            })  
            console.log(projects) 
            localStorage.setItem('projects', JSON.stringify(projects)) 
        }
    }, [cardInfo])

    function fetchProject() {
        const response = JSON.parse(localStorage.getItem('projects'));
        const [ project ] = response.filter(project => {
            if (project.id === id) return project
        })
        if (project) {
            setCardInfo(project)
        } else {
            setCardInfo([]);
        }
    }

    function openProject() {
        navigate(`${cardInfo.id}`)
    }

    // function handleEdit() {
    //     let projects = JSON.parse(localStorage.getItem('projects'));
    //     console.log(projects)
    //     projects = projects.map(project => {
    //         return (project.id === id )? cardInfo : project;
    //     })  
    //     console.log(projects) 
    //     localStorage.setItem('projects', JSON.stringify(projects))    
    //     fetchProject()
    // }

    return (
        <div className="project">
            <input type="text" defaultValue={cardInfo.title} onChange={(e) => {
                setCardInfo({
                    ...cardInfo,
                    title: e.target.value
                })
            }}/>
            <input type="text" defaultValue={cardInfo.description} onChange={(e) => {
                setCardInfo({
                    ...cardInfo,
                    description: e.target.value
                })
            }} />
            <button onClick={openProject}>Open</button>
            <button onClick={() => deleteProject(cardInfo.id)}>Delete</button>     
        </div>
    )
}