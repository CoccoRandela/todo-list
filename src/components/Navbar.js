import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <button className="nav-btn projects-btn">
                <Link to="/projects" >Projects</Link>
            </button>
            <button className="nav-btn calendar-btn"><Link to="/calendar" >Calendar</Link></button>
        </nav>
    )
}