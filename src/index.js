import React from 'react';
import  ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { ProjectsIndex, Project, Calendar } from './components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path="/projects" element={<ProjectsIndex/>}/>
                    <Route path="/projects/:id" element={<Project/>}/>
                    <Route path='/calendar' element={<Calendar/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);