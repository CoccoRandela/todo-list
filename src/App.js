import React from "react";
import { Routes, Route } from "react-router";
import { Wrapper, Login } from "./components";
import "./App.css";


export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Wrapper />} />
        </Routes>
    )    
}