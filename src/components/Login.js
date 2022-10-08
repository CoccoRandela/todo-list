import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    function login(e) {
        e.preventDefault();

    }

    return (
        <div className="modal">
            <form onSubmit={login}>
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
                <button type="submit">Login</button>         
            </form>
            <span>New User?<Link to='/create-account'>Create Account</Link> </span>
        </div>
    )
}