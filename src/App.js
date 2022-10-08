import React from "react";
import { Routes, Route } from "react-router";
import { Wrapper } from "./components";
import "./App.css";


export default function App() {
    return (
        <Routes>
            <Route path="/*" element={<Wrapper />} />
        </Routes>
    )    
}