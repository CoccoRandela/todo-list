// React Imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Firebase Imports
import { db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function ProjectCard({projectInfo, deleteProject}) {

    const navigate = useNavigate();

    const [cardInfo, setCardInfo] = useState(projectInfo)

    
    useEffect(() => {
        setDoc(doc(db, 'projects', `${cardInfo.id}`), cardInfo)

    }, [cardInfo])


    function openProject() {
        navigate(`${cardInfo.id}`, {state: cardInfo})
    }



    return (
        <div className="project">
            <input type="text" defaultValue={cardInfo.title} onChange={(e) => {
                setCardInfo({
                    ...cardInfo,
                    title: e.target.value
                })
            }}/>
            <input type="text" defaultValue={cardInfo.description} onChange={(e) => {
                setCardInfo({
                    ...cardInfo,
                    description: e.target.value
                })
            }} />
            <button onClick={openProject}>Open</button>
            <button onClick={() => deleteProject(cardInfo.id)}>Delete</button>     
        </div>
    )
}