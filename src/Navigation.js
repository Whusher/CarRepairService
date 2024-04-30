import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import AboutUs from "./Pages/InfoSchema/AboutUs";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default Navigation;
