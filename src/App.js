import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./components";
import "./App.css";


export default function App() {
    return (
        <>
            <header>
                <h2>BetterLate</h2>
            </header>
            <Navbar/>
            <Outlet/>            
        </> 
    )    
}