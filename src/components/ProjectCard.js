// React Imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Firebase Imports
import { db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { CardStyles, CardButtonStyles } from "./styles";

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
        <CardStyles>
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
            <CardButtonStyles onClick={openProject}>Open</CardButtonStyles>
            <CardButtonStyles onClick={() => deleteProject(cardInfo.id)}>Delete</CardButtonStyles>     
        </CardStyles>
    )
}