import React, {useState} from "react";
import Modal from "./Modal";


export default function ProjectsIndex() {

    const [modal, setModal] = useState(false);

    function openModal() {
        setModal(true);
    }

    return (
        <div className="prj-index">
            {modal && <Modal/>}
            <header>    
                <h1>Your Projects</h1>
            </header>
            <div className="projects">
                <button onClick={openModal}>+</button>
            </div>            
        </div>
    )
}