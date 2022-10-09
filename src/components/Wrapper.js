import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {Calendar, Navbar, ProjectPage, ProjectsIndex} from "./index";
import { auth } from "../services/firebase";

export default function Wrapper() {
    const [user, setUser] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.currentUser) {
            navigate('/login')
        } else {
            setUser(auth.currentUser)
        }
    }, [])   

    return (
        <>
        <header>
            <h2>BetterLate</h2>
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