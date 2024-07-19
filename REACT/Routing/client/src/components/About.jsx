import { NavLink, Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import React from 'react';


import Contacts from "./Contacts";
import Mission from "./Mission";
import AboutUs from "./AboutUs";


export default function About() {
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (location.pathname === '/about') {
            navigate('/about/aboutUs');
        }
    }, [location.pathname, navigate]);


    return (
        <>
            <nav className="second-header">
                <ul>
                    <li><NavLink style={({ isActive }) => isActive ? { color: "white" } : {}} to="aboutUs">About us</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? { color: "white" } : {}} to="contactUs">Contact us</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? { color: "white" } : {}} to="ourMission">Our Mission</NavLink></li>
                </ul>
            </nav>

            <Routes>
                <Route path="aboutUs" element={<AboutUs />} />
                <Route path="contactUs" element={<Contacts />} />
                <Route path="ourMission" element={<Mission />} />
            </Routes>
        </>
    )
}