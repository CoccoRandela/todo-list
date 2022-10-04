import React, {useEffect, useState} from "react";
import ModalForm from "./ModalForm";
import ProjectCard from "./ProjectCard";



export default function ProjectsIndex() {

    const [modal, setModal] = useState(false);

    const [projects, setProjects] = useState([])


    useEffect(() => {
        fetchProjects();
    }, [])

    useEffect(() => {
        // condition necessary to avoid use in first render and infinite loop
        // if(projects.length) {       
            console.log('storing')
            localStorage.setItem('projects', JSON.stringify(projects)) 
        // }   
    }, [projects])

    function fetchProjects() {
        console.log('fetching')
        const response = JSON.parse(localStorage.getItem('projects'));
        if (response) {
            setProjects(response)
        } else {
            setProjects([]);
        }
    }

    function openCloseModal() {
        setModal((modal === true)? false: true);
    }


    function addProject(inputs) {

        const [ lastProject ] = projects.slice(-1);

        openCloseModal()

        const newProjects = [
            ...projects, { 
                id: lastProject ? lastProject.id + 1 : 0,
                ...inputs,
                todos: []
            }
        ]

        setProjects(newProjects)
    }

    function deleteProject(projectId) {
        const newProjects = projects.filter(project => {
            return project.id !== projectId
        })

        setProjects(newProjects)
    }

    console.log(projects, 'before entering creation')

    const projectCards = projects.map(project => {
        console.log('in creation')
        return (
            <ProjectCard projectInfo={project} deleteProject={deleteProject} key={project.id}/>
        )
    });

    return (
        <div className="index">

            {modal && <ModalForm item="project" className="modal prj-mod" options={['title', 'description']} addItem={addProject} closeModal={openCloseModal}/>}

            <header className="prj-head">    
                <h1>Your Projects</h1>
                <button className="add-prj-btn" onClick={openCloseModal}>+</button>
            </header>

            <div className="projects">
                {projectCards}
            </div>    

        </div>
    )
}
