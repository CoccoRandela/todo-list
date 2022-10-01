import React, {useEffect, useState} from "react";
import ModalForm from "./ModalForm";
import ProjectCard from "./ProjectCard";



export default function ProjectsIndex() {
    console.log('inside pro ind')

    const [modal, setModal] = useState(false);

    const [projects, setProjects] = useState([])


    useEffect(() => {
        fetchProjects();
    }, [])

    function fetchProjects() {
        const response = JSON.parse(localStorage.getItem('projects'));
        console.log(response)
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


        localStorage.setItem('projects', JSON.stringify(newProjects))

        fetchProjects();
    }

    // function deleteProject(projectId) {
    //     const newProjects = projects.filter(project => {
    //         return project.id !== projectId
    //     })

    //     localStorage.setItem('projects', JSON.stringify(newProjects))

    //     fetchProjects();
    // }



    const projectCards = projects.map(project => {
        return (
            <ProjectCard id={project.id} key={project.id}/>
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
