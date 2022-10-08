import React, { useState } from "react";

export default function CreateAccount() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    function createUser(e) {
        e.preventDefault();

    }

    return (
        <div className="modal">
            <form onSubmit={createUser}>
                <label>
                    email
                    <input type='email' defaultValue='' onChange={(e) => {
                        setEmail(e.target.value)
                    }}/> 
                </label>
                <label>
                    password
                    <input type='password' defaultValue='' onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </label>
                <button type="submit">Create Account</button>          
            </form>
        </div>
    )
}