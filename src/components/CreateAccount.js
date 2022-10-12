// React Imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Firebase Imports
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from "../services/firebase";
import { collection, doc, setDoc } from "firebase/firestore";



export default function CreateAccount() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const navigate = useNavigate();

    function register(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
            setDoc(doc(db, 'users', `${credentials.user.uid}`), {
                email: email,
                projects: []
            })
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