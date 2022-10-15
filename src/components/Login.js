//React Imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Components
import { Modal } from "./styles";
//Services
import { login } from "../services/user.service";
import ModalForm from "./ModalForm";

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
        <Modal>
            <h3>BetterLate</h3>
            <ModalForm 
            fields={['email', 'password']} 
            submitFunc={redirectToHomepage}
            cancelButton={false}
            buttonText={'Sign In'}
            />
            <span>New User?<Link to='/create-account'>Create Account</Link> 
            </span>
        </Modal>
    )
}