//React Imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Components
import Form from "./Form";
import { ModalStyles, ModalContainerStyles, HeaderStyles } from "./styles";
//Services
import { login } from "../services/user.service";

export default function Login() {
    // const [email, setEmail] = useState([]);
    // const [password, setPassword] = useState([]);
    const navigate = useNavigate()

    function redirectToHomepage({ email, password }) {
        login(email, password)
        .then(() => navigate('/'))
        .catch((error) => alert(error.message))
    }

    return (
        <>
        <HeaderStyles>
            <h2>BetterLate</h2>
        </HeaderStyles>
        <ModalContainerStyles>
            <ModalStyles>
                <h3>Welcome Back!</h3>
                <Form 
                fields={['email', 'password']} 
                submitFunc={redirectToHomepage}
                cancelButton={false}
                buttonText={'Sign In'}
                />
                <p>New User?<Link to='/create-account'>Create Account</Link> 
                </p>
            </ModalStyles>
        </ModalContainerStyles>
        </>
    )
}