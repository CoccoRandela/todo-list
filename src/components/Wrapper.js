//React Imports
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
//Components
import { Calendar, Navbar, ProjectPage, ProjectsIndex } from "./index";
import { ButtonStyles, HeaderStyles, HeaderWrapperStyles } from "./styles";
//Services
import { fetchUser, logout } from "../services/user.service";


export default function Wrapper() {
    const [user, setUser] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser(setcurrentUser);
    }, [])
    
    function setcurrentUser(currentUser) {
        if(currentUser) {
            setUser(currentUser)            
        } else {
            navigate( '/login')            
        }
    }
    
    function redirectToLogin() {
        logout()
        .then((response) => {
            fetchUser(setcurrentUser)
        })       
    }

    return (
        user && <>
            <HeaderWrapperStyles>
                <HeaderStyles>
                    <h2>BetterLate</h2>
                    <ButtonStyles onClick={redirectToLogin}>Sign Out</ButtonStyles>
                </HeaderStyles>
                <Navbar/>
            </HeaderWrapperStyles>
            <Routes>
                <Route path="/" element={<Navigate to='/projects' />} />
                <Route path="/projects" element={<ProjectsIndex />} />
                <Route path="/projects/:id" element={<ProjectPage />} />
                <Route path="/calendar" element={<Calendar/>} />
            </Routes>           
        </> 
    )
}