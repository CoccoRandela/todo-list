// React imports
import React, {useEffect, useState} from "react";
import ModalForm from "./ModalForm";

//Components
import ProjectCard from "./ProjectCard";

//Firebase imports
import { auth, db } from "../services/firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  deleteDoc,
  arrayRemove,
} from "firebase/firestore";



export default function ProjectsIndex() {

    const [modal, setModal] = useState(false);

    const [projects, setProjects] = useState([])


    useEffect(() => {
        fetchProjects();
    }, [])



    function fetchProjects() {
        getDoc(doc(db, 'users', `${auth.currentUser.uid}`))
        .then((userDoc) => {
            const projectsIds = userDoc.data().projects;
            const projectsProms = []
            projectsIds.forEach(id => {
                const p = getDoc(doc(db, 'projects', `${id}`))
                projectsProms.push(p)
            })
            return projectsProms
        })
        .then(projectsProms => {
            Promise.all(projectsProms)
            .then((docs) => {
                const projects = [];
                docs.forEach(doc => {
                    projects.push({
                        ...doc.data(), 
                        id: doc.id
                    })
                })
                setProjects(projects)
            })
        })
    }


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

        addDoc(collection(db, 'projects'), newProject)
        .then((docRef) => {
            updateDoc(doc(db, 'users',`${auth.currentUser.uid}`), {
                projects: arrayUnion(docRef.id)
            })
            return docRef;
        })
        .then((docRef) => {
            setProjects([...projects, {...newProject, id: docRef.id}])
        })

    }

    function deleteProject(projectId) {
        const newProjects = projects.filter(project => {
            return project.id !== projectId
        })

        deleteDoc(doc(db, 'projects', `${projectId}`))
        .then(
            updateDoc(doc(db, 'users',`${auth.currentUser.uid}`), {
            projects: arrayRemove(`${projectId}`)
            })
        )

        setProjects(newProjects)
    }


    const projectCards = projects.map(project => {
        return (
            <ProjectCard projectInfo={project} deleteProject={deleteProject} key={projects.indexOf(project)}/>
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
