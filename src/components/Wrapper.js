import React from "react";
import { Routes, Route } from "react-router-dom";
import {Calendar, Navbar, ProjectPage, ProjectsIndex} from "./index";

export default function Wrapper() {
    return (
        <>
        <header>
            <h2>BetterLate</h2>
        </header>
        <Navbar/>
        <Routes>
            <Route path="/projects" element={<ProjectsIndex />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/calendar" element={<Calendar/>} />
        </Routes>           
    </> 
    )
}