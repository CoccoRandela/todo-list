//React Imports
import React, { useState, useEffect } from "react";
//Components
import CheckboxContainer from "./CheckboxContainer";
//Firebase Imports
import { db } from "../services/firebase";
import { setDoc, doc } from "firebase/firestore";
import { AddButtonStyles, CardButtonStyles, CardStyles, TodoButtonStyles } from "./styles";
import addColor from "./styles/addColor";

export default function TodoCard({ todoInfo, deleteTodo }) {

    const [cardInfo, setCardInfo] = useState(todoInfo)

    useEffect(() => {
        setDoc(doc(db, 'todos', `${cardInfo.id}`), cardInfo)

    }, [cardInfo])


    function togglePriority() {
        switch (cardInfo.priority) {
            case 'low':
                setCardInfo({
                    ...cardInfo,
                    priority: 'medium'
                });
                break;
            case 'medium':
                setCardInfo({
                    ...cardInfo,
                    priority: 'high'
                });
                break;
            case 'high':
                setCardInfo({
                    ...cardInfo,
                    priority: 'low'
                });
                break;
        }
    }

    function addCheckbox() {
        const [ lastCheckbox ] = cardInfo.checkboxes.slice(-1);
    
        setCardInfo(
            {...cardInfo,
            checkboxes: 
                [...cardInfo.checkboxes,
                    { 
                    id: lastCheckbox ? lastCheckbox.id + 1 : 0,
                    completed: false,
                    task: '',
                    }
                ]
            }
        )
    }

    function deleteCheckbox(checkboxId) {

        const newCheckboxes = cardInfo.checkboxes.filter(checkbox => 
            checkbox.id !== checkboxId
        )

        setCardInfo(
            {...cardInfo,
            checkboxes: newCheckboxes
            }
        )
    }

    function editCheckbox(editedCheckbox) {

        console.log(editedCheckbox)

        const newCheckboxes = cardInfo.checkboxes.map(checkbox => {
            return checkbox.id === editedCheckbox.id? editedCheckbox : checkbox;
        })

        setCardInfo(
            {...cardInfo,
            checkboxes: newCheckboxes
            }
        )

    }

    return (
        <CardStyles r='3' c={() => addColor(cardInfo.priority)}>

            <div>
                <TodoButtonStyles onClick={() => {
                    togglePriority()
                    }}>
                    {cardInfo.priority}
                </TodoButtonStyles>
            </div>

            <input type="text" defaultValue={cardInfo.title} onChange={(e) => {
                setCardInfo({
                    ...cardInfo,
                    title: e.target.value
                })
            }}/>

            {cardInfo.checkboxes && 
                <CheckboxContainer
                checkboxes={cardInfo.checkboxes}
                addCheckbox={addCheckbox} 
                editCheckbox={editCheckbox} 
                deleteCheckbox={deleteCheckbox}
                priority={cardInfo.priority}
                />
            } 

            <input type="date" defaultValue={cardInfo.dueDate} onChange={(e) => {
                setCardInfo({
                    ...cardInfo,
                    dueDate: e.target.value
                })
            }}/>    

            <TodoButtonStyles onClick={() => deleteTodo(cardInfo)}>Delete</TodoButtonStyles>   

        </CardStyles>
    )
}