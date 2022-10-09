//React Imports
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
//Components
import { Calendar, Navbar, ProjectPage, ProjectsIndex } from "./index";
//Firebase
import { auth } from "../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Wrapper() {
    const [user, setUser] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser()
    }, [])
    
    function fetchUser() {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(currentUser)            
            } else {
                navigate('/login')            
            }
        }) 
    }
    
    function logout() {
        signOut(auth)
        .then((response) => {
            fetchUser()
        })
    }

    return (
        <>
        <header className="main-header">
            <h2>BetterLate</h2>
            <button onClick={logout}>Sign Out</button>
        </header>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Navigate to='/projects' />} />
            <Route path="/projects" element={<ProjectsIndex />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/calendar" element={<Calendar/>} />
        </Routes>           
    </> 
    )
}