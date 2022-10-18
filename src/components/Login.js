//React Imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Components
import Form from "./Form";
import {
  ModalStyles,
  ModalContainerStyles,
  HeaderStyles,
  ButtonStyles,
  HeaderWrapperStyles,
} from "./styles";
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
        <HeaderWrapperStyles>
            <HeaderStyles>
            <h2>BetterLate</h2>
            </HeaderStyles>
        </HeaderWrapperStyles>
        <ModalContainerStyles opacity='0.0'>
            <ModalStyles>
                <h3>Welcome Back!</h3>
                <Form 
                fields={['email', 'password']} 
                submitFunc={redirectToHomepage}
                cancelButton={false}
                buttonText={'Sign In'}
                />
                <p>New User?</p>
                <ButtonStyles onClick={()=> navigate('/create-account')}>Create Account</ButtonStyles>
            </ModalStyles>
        </ModalContainerStyles>
        </>
    )
}