import React from "react";
import { Routes, Route } from "react-router";
import { Wrapper, Login, CreateAccount } from "./components";



export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/*" element={<Wrapper />} />
        </Routes>
    )    
}