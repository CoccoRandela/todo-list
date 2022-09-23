import React, {useState} from "react";
import ModalForm from "./ModalForm";
import Card from "./Card";


export default function ProjectsIndex() {

    const [modal, setModal] = useState(false);

    const [projects, setProjects] = useState([])

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

    console.log(projects)

    const projectCards = projects.map(project => {
        return (
            <Card item={project} key={project.id}/>
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