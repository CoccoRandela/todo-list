import React, {useState} from "react";
import ModalForm from "./ModalForm";
import Card from "./Card";


export default function ProjectsIndex() {

    const [modal, setModal] = useState(false);

    const [projects, setProjects] = useState([{id:0, title: 'cacca', description: 'pupu'}])

    function openCloseModal() {
        setModal((modal === true)? false: true);
    }

    function addProject(inputs) {
        openCloseModal()
        setProjects([
            ...projects, { 
                id: projects.length,
                ...inputs
            }
        ])
    }

    function deleteProject(projectId) {
        setProjects(projects.filter(project => {
            if (project.id !== projectId) return project;
        }))
    }


    const projectCards = projects.map(project => {
        return (
            <Card item={project} deleteItem={deleteProject} key={project.id}/>
        )
    });

    return (
        <div className="prj-index">

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