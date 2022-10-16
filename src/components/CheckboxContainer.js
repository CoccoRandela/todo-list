import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { CbContainerStyles } from "./styles";


export default function CheckboxContainer({ checkboxes, addCheckbox, editCheckbox, deleteCheckbox }) {

    const [boxActive, setBoxActive] = useState(false)


    const cbPanels = checkboxes.map(checkbox => {
        return <Checkbox checkbox={checkbox} editCheckbox={editCheckbox} deleteCheckbox={deleteCheckbox}/>
    })

    return (
        <CbContainerStyles>
            <header>
                <button onClick={() => setBoxActive(boxActive === false ? true: false)}>\/</button>
                <h4>Checkboxes</h4>
            </header>
            {boxActive && <div className="check-boxes">
                {cbPanels}
                <div className="checkbox">
                    <button className="create-cb" onClick={addCheckbox}>+ </button>
                    <span>__________</span>
                </div>
            </div>}
        </CbContainerStyles>
    )
}