import React, {useState} from "react";
import ModalForm from "./ModalForm";
import Card from "./Card";


export default function ProjectsIndex() {

    const [modal, setModal] = useState(false);

    const [projects, setProjects] = useState([{id:0, title: 'cacca', description: 'pupu', todos: []}])

    console.log(projects)

    function openCloseModal() {
        setModal((modal === true)? false: true);
    }

    function addProject(inputs) {
        
        const [ lastProject ] = projects.slice(-1);

        console.log(lastProject, 'yo')
        openCloseModal()
        setProjects([
            ...projects, { 
                id: lastProject.id + 1,
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
            <Card item={project} deleteItem={deleteProject} editItem={editProject} key={project.id}/>
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