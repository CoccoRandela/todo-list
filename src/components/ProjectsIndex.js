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
        fetchProjects()
        .then(projects => setProjects(projects))
    }, [])



    function fetchProjects() {
        return getDoc(doc(db, 'users', `${auth.currentUser.uid}`))
        .then((userDoc) => {
            const projectsIds = userDoc.data().projects;
            const projectsProms = []
            projectsIds.forEach(id => {
                const p = getDoc(doc(db, 'projects', `${id}`))
                projectsProms.push(p)
            })
            return Promise.all(projectsProms)
        })
        .then(snapshots => {
            const projects = [];
            snapshots.forEach(s => {
                projects.push({
                    ...s.data(), 
                    id: s.id
                })
            })
            return projects
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
        .then(docRef => {
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
        console.log('here', projectId)

        const newProjects = projects.filter(project => {
            return project.id !== projectId
        })

        deleteDoc(doc(db, 'projects', `${projectId}`))
        .then(() => {
            updateDoc(doc(db, 'users',`${auth.currentUser.uid}`), {
            projects: arrayRemove(`${projectId}`)
            })
        })

        setProjects(newProjects)
    }


    const projectCards = projects.map(project => {
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
