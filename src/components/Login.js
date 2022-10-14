//React Imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Services
import { login } from "../services/user.service";

export default function Login() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate()

    function redirectToHomepage(e) {
        e.preventDefault();
        login(email, password)
        .then(() => navigate('/'))
        .catch((error) => alert(error.message))
    }

    return (
        <div className="modal">
            <form onSubmit={redirectToHomepage}>
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