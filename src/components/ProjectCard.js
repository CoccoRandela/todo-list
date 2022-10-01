import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({id}) {

    const navigate = useNavigate();

    const [cardInfo, setCardInfo] = useState([])

    useEffect(() => {
        fetchProject()
        console.log(cardInfo, 'in use effect')
    }, [])

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

    function handleEdit() {
        console.log(cardInfo, id)
        let projects = JSON.parse(localStorage.getItem('projects'));
        console.log(projects)
        projects = projects.map(project => {
            return (project.id === id )? cardInfo : project;
        })  
        console.log(projects) 
        localStorage.setItem('projects', JSON.stringify(projects))    
        fetchProject()
    }

    function deleteItem() {
        let projects = JSON.parse(localStorage.getItem('projects'));
        projects = projects.filter(project => {
            return project.id !== cardInfo.id
        })

        localStorage.setItem('projects', JSON.stringify(projects))

        fetchProject();
    }

    console.log(cardInfo, cardInfo.entries, 'outside')
    if (cardInfo.title) {
        return (
            <div className="project">
                <input type="text" defaultValue={cardInfo.title} onChange={(e) => {
                    setCardInfo({
                        ...cardInfo,
                        title: e.target.value
                    })
                }} onBlur={handleEdit}/>
                <input type="text" defaultValue={cardInfo.description} onChange={(e) => {
                    setCardInfo({
                        ...cardInfo,
                        description: e.target.value
                    })
                }} onBlur={handleEdit}/>
                <button onClick={openProject}>Open</button>
                <button onClick={() => deleteItem(cardInfo.id)}>Delete</button>     
            </div>
        )
    }
}