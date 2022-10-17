// React imports
import React, {useEffect, useState} from "react";
import Form from "./Form";

//Components
import ProjectCard from "./ProjectCard";
import {
  AddButtonStyles,
  CardContainerStyles,
  ModalContainerStyles,
  ModalStyles,
  MainHeaderStyles,
} from "./styles";
//Services
import { serverTimestamp } from "firebase/firestore";
import { fetchAllProjects, add, remove } from "../services/project.service";



export default function ProjectsIndex() {

    const [modal, setModal] = useState(false);

    const [projects, setProjects] = useState([])


    useEffect(() => {
        fetchAllProjects()
        .then(projects => setProjects(projects))
    }, [])



    function openCloseModal() {
        setModal((modal === true)? false: true);
    }


    function addProject(inputs) {
        openCloseModal();

        const newProject = {
            ...inputs,
            createdAt: serverTimestamp(),
            todos: []
        }

        add(newProject)
        .then((docRef) => {
            setProjects([...projects, {...newProject, id: docRef.id}])
        })

    }

    function deleteProject(projectId) {
        console.log('here', projectId)

        const newProjects = projects.filter(project => {
            return project.id !== projectId
        })

        remove(projectId);

        setProjects(newProjects)
    }


    const projectCards = projects.map(project => {
        return (
            <ProjectCard projectInfo={project} deleteProject={deleteProject} key={project.id}/>
        )
    });
    

    return (
        <>
            {modal && 
            <ModalContainerStyles>
                <ModalStyles>
                    <Form 
                    fields={['title', 'description']} submitFunc={addProject} 
                    cancelButton={true}
                    buttonText={'Add Project'} 
                    returnFunc={openCloseModal}/>
                </ModalStyles>
            </ModalContainerStyles>    
            }

            <MainHeaderStyles>    
                <h1>Your Projects</h1>
                <AddButtonStyles onClick={openCloseModal}>
                +</AddButtonStyles> 
            </MainHeaderStyles>

            <CardContainerStyles>
                {projectCards}
            </CardContainerStyles>    

        </>
    )
}
