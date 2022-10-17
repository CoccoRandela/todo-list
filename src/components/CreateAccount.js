// React Imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Components
import { ModalStyles, ModalContainerStyles, HeaderStyles } from "./styles";
import Form from "./Form";
//Services
import { createUser, createUserDoc } from "../services/user.service";




export default function CreateAccount() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const navigate = useNavigate();

    function redirectToHomepage({email, password}) {
        createUser(email, password)
        .then((credentials) => {
            createUserDoc(credentials);       
        })
        .then(() => {
            navigate('/'); 
        })

    }

    return (
        <>
        <HeaderStyles>
            <h2>BetterLate</h2>
        </HeaderStyles>
        <ModalContainerStyles>
            <ModalStyles>
                <h3>Join now!</h3>
                <Form 
                fields={['email', 'password']} 
                submitFunc={redirectToHomepage}
                cancelButton={true}
                buttonText={'Sign Up'}
                returnFunc={() => navigate('/login')}
                />
            </ModalStyles>
        </ModalContainerStyles>
        </>
    )
}