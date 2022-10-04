import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({projectInfo, deleteProject}) {

    const navigate = useNavigate();

    const [cardInfo, setCardInfo] = useState(projectInfo)

    // useEffect(() => {
    //     fetchProject()
    // }, [])    
    
    useEffect(() => {
        // condition necessary to avoid use in first render and infinite loop
        if (Object.keys(cardInfo).length) {
            const projects = JSON.parse(localStorage.getItem('projects'));

            const newProjects = projects.map(project => {
                return (project.id === projectInfo.id )? cardInfo : project;
            })  

            localStorage.setItem('projects', JSON.stringify(newProjects)) 
        }
    }, [cardInfo])

    function fetchProject() {
        const response = JSON.parse(localStorage.getItem('projects'));
        console.log(response, 'fetching project')
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

    console.log(cardInfo)

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