import React, { useEffect, useState } from "react";

export default function Checkbox({ checkbox, editCheckbox, deleteCheckbox }) {

    const [checkboxInfo, setCheckboxInfo] = useState(checkbox)

    useEffect(() => {
        editCheckbox(checkboxInfo)
    }, [checkboxInfo])

    return (
        <div className="checkbox" key={checkbox.id}>
        <input type="checkbox" defaultChecked={(checkbox.completed === true &&'checked')} onChange={() => {
            setCheckboxInfo({
                ...checkboxInfo,
                completed : !checkbox.completed
            })
        }}/> 
        <input type="text" defaultValue={checkbox.task}onChange={(e) => {
            setCheckboxInfo({
                ...checkboxInfo,
                task: e.target.value
            })
        }}/>
        <button onClick={() => {
            deleteCheckbox(checkbox.id)
        }}>Delete</button>
        </div>
    )
}