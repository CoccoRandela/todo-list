import React, { useState } from "react";
import Calendar from 'react-calendar'
import dayjs from 'dayjs'


export default function CalendarPage() {
    function assignClass({ date, view }) {
        const projects = JSON.parse(localStorage.getItem('projects'))
        let contentToDisplay = [];
        projects.forEach(project => {
            const todos = project.todos;
            todos.forEach(todo => contentToDisplay.push(todo))
            
        })
        // contentToDisplay.forEach(content => {
        //     console.log(dayjs(content.dueDate, 'YYYY-MM-DD').$d)
        // })
        if (contentToDisplay.find(el => {
            return dayjs(el.dueDate, 'YYYY-MM-DD').format() === dayjs(date).format()
        })) {
            return 'filled'
        }
    }

    const [value, onChange] = useState(new Date()); 

    return (
        <Calendar tileClassName={assignClass}/>
    )
}