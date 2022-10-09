import React, { useState } from "react";
import { createUserWithEmailAndPassword, connectAuthEmulator } from 'firebase/auth'
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

connectAuthEmulator(auth, 'http://localhost:9099')

export default function CreateAccount() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const navigate = useNavigate();

    function register(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate('/')          
        })

    }

    return (
        <div className="modal">
            <form onSubmit={register}>
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