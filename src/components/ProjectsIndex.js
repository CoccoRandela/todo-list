import React, {useEffect, useState} from "react";
import ModalForm from "./ModalForm";
import ProjectCard from "./ProjectCard";



export default function ProjectsIndex() {


    const [modal, setModal] = useState(false);

    const [projects, setProjects] = useState([])

    function openCloseModal() {
        setModal((modal === true)? false: true);
    }

    useEffect(() => {
        setProjects(JSON.parse(localStorage.getItem('projects')))
    }, [])

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects))
    }, [projects])

    function addProject(inputs) {
        
        const [ lastProject ] = projects.slice(-1);

        openCloseModal()
        setProjects([
            ...projects, { 
                id: lastProject ? lastProject.id + 1 : 0,
                ...inputs,
                todos: []
            }
        ])
    }

    function deleteProject(projectId) {
        setProjects(projects.filter(project => {
            return project.id !== projectId
        }))
    }

    function editProject(editablePrj, title, description) {

        const newProjects = projects.filter(project => {
            return project.id !== editablePrj.id
        });

        newProjects.push({
            id: editablePrj.id,
            title,
            description,
            todos: editablePrj.todos
        })

        setProjects(newProjects)
    }


    const projectCards = projects.map(project => {
        return (
            <ProjectCard item={project} deleteItem={deleteProject} editItem={editProject} key={project.id}/>
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
