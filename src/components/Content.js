import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsIndex, Project } from './index';

export default function Content() {
    return (
            <Routes>
                <Route path='/projects' element={<ProjectsIndex/>} />
                <Route path='/:projectId' element={<Project/>} />
            </Routes>
    );
}

