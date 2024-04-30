import React, { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
import Home from "./Pages/User/Home";
import AboutUs from "./Pages/InfoSchema/AboutUs";
import { AuthContext } from "./Components/AuthContext";

const Navigation = () => {
    const { user } = useContext(AuthContext);
    let tipoUs;
    if(user){
        tipoUs = user.type;
        console.log(user);
    }

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {(user && tipoUs === "1") ? <Route path="/home" element={<Home />} /> : <Route path="/home" element={<Navigate to="/login" />} />}
        </Routes>
    );
}

export default Navigation;
