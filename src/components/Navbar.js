//React Imports
import React from "react";
import { Link } from "react-router-dom";
//Components
import { NavbarStyles } from "./styles";

export default function Navbar() {
    return (
        <NavbarStyles >
            <Link to="/projects" >Projects
            </Link>
            <Link to="/calendar" >Calendar
            </Link>
        </NavbarStyles>
    )
}