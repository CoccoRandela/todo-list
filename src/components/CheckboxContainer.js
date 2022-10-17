import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { CardButtonStyles, CbContainerStyles } from "./styles";
import addColor from "./styles/addColor";


export default function CheckboxContainer({ checkboxes, addCheckbox, editCheckbox, deleteCheckbox, priority }) {

    const [boxActive, setBoxActive] = useState(false);

    function openBox() {
        setBoxActive(boxActive === false ? true: false);
    }


    const cbPanels = checkboxes.map(checkbox => {
        return <Checkbox checkbox={checkbox} editCheckbox={editCheckbox} deleteCheckbox={deleteCheckbox}/>
    })

    return (
        <CbContainerStyles c={() => addColor(priority)}>
            <header>
                <button 
                onClick={(e) => {
                    openBox();
                    e.target.classList.toggle('active');
                }}> &gt; </button>
                <h4>Checkboxes</h4>
            </header>
            {boxActive && 
            <div>
                {cbPanels}
                <div className="checkbox">
                    <button className="create-cb" onClick={addCheckbox}>+ </button>
                    <span>__________</span>
                </div>
            </div>}
        </CbContainerStyles>
    )
}