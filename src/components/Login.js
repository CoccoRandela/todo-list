//React Imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Components
import { Modal, Form } from "./styles";
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
        <Modal>
            <Form onSubmit={redirectToHomepage}>
                <input type='email' defaultValue='' placeholder="e-mail" onChange={(e) => {
                    setEmail(e.target.value)
                }}/> 
                <input type='password' defaultValue='' placeholder='password' onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <button type="submit">Login</button>         
            </Form>
            <span>New User?<Link to='/create-account'>Create Account</Link> </span>
        </Modal>
    )
}