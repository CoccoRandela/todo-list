//React Imports
import React from "react";
import { Routes, Route } from "react-router";
//Components
import { Wrapper, Login, CreateAccount } from "./components";
import { GlobalStyles } from "./components/styles";



export default function App() {
    return (
        <>
        <GlobalStyles/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/*" element={<Wrapper />} />
        </Routes>
        </>
    )    
}