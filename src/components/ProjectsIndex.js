import React, {useState} from "react";
import ModalForm from "./ModalForm";


export default function ProjectsIndex() {

    const [modal, setModal] = useState(false);

    function openModal() {
        setModal(true);
    }

    return (
        <div className="prj-index">
            {modal && <ModalForm className="modal prj-mod" options={['title', 'description']}/>}
            <header>    
                <h1>Your Projects</h1>
            </header>
            <div className="projects">
                <button onClick={openModal}>+</button>
            </div>            
        </div>
    )
}