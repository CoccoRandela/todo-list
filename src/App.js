//React Imports
import React from "react";
import { Routes, Route } from "react-router";
//Components
import { Wrapper, Login, CreateAccount } from "./components";
import { GlobalStyles } from "./components/styles";
import { ThemeProvider } from "styled-components";

const theme = {
    colors : {
       light: '#f9feff',
       mid: '#4eacb8',
       dark: '#07607b',
       lowP: '#6cd1af',
       medP: '#f6cd46',
       highP: '#ff5656'
           
    }
}

export default function App() {
    return (
        <>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/*" element={<Wrapper />} />
            </Routes>
        </ThemeProvider>
        </>
    )    
}