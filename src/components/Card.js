import React from "react";

export default function Card({item}) {

    return (
        <div className="project">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}