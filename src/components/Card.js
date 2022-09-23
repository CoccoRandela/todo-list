import React from "react";

export default function Card({item, deleteItem}) {

    return (
        <div className="project">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
    )
}