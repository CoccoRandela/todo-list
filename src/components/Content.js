import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsIndex, Project } from './index';

export default function Content() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProjectsIndex/>} />
                <Route path='projects/:projectId' element={<Project/>} />
            </Routes>
        </BrowserRouter>
    );
}

