import React,{ useState }from "react";
import { useParams } from "react-router";
import ModalForm from "./ModalForm";


export default function Project(props) {
    const params = useParams();
    const projectId = Number(params.id);
    const [ project ] = JSON.parse(localStorage.getItem('projects')).filter(project => project.id === projectId)

    console.log(project)

    const [modal, setModal] = useState(false);

    function openCloseModal() {
        setModal((modal === true)? false: true);
    }

    return (
        <div className="prj-page">
            {modal && <ModalForm item="project" className="modal prj-mod" options={['title', 'due date', 'priority']} addItem={null} closeModal={null}/>}

            <header className="prj-head">    
                <h1>{project.title}</h1>
                <button className="add-todo-btn" onClick={openCloseModal}>+</button>
            </header>

            <div className="todos">
                {null}
            </div>    
        </div>
    )
}