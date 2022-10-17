import React, { useEffect, useState } from "react";
import { CheckboxStyles, TodoButtonStyles } from "./styles";

export default function Checkbox({ checkbox, editCheckbox, deleteCheckbox }) {

    const [checkboxInfo, setCheckboxInfo] = useState(checkbox)

    useEffect(() => {
        editCheckbox(checkboxInfo)
    }, [checkboxInfo])

    return (
        <CheckboxStyles key={checkbox.id}>
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
            <TodoButtonStyles fs='0.7rem' onClick={() => {
                deleteCheckbox(checkbox.id)
            }}>Delete</TodoButtonStyles>
        </CheckboxStyles>
    )
}