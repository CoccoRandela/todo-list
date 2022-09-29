import React, { useEffect, useState } from "react";

export default function Checkbox({ checkbox, editCheckbox }) {
    console.log(checkbox)

    const [task, setTask] = useState(checkbox.task)

    useEffect(() => {
        checkbox.task = task;
    }, [task])

    return (
        <div className="checkbox" key={checkbox.id}>
        <input type="checkbox" /> 
        <input type="text" defaultValue={checkbox.task}onChange={(e => {
            setTask(e.target.value)
        })} onBlur={() => editCheckbox(checkbox)}/>
        </div>
    )
}