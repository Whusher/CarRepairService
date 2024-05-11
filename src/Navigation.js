import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
import Home from "./Pages/User/Home";
import AboutUs from "./Pages/InfoSchema/AboutUs";
import { AuthContext } from "./Components/AuthContext";
import History from "./Pages/User/History";
import WorkDetails from "./Pages/User/WorkDetails";
import { PrivateRoute } from "./Components/AuthContext"; // Importa el componente PrivateRoute

const Navigation = () => {
  const { user } = useContext(AuthContext);
  const tipoUs = user ? user.type : null;

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<><h1>Tas perdido o k?</h1></>} />
      <Route path="/about" element={user ? <Navigate to="/home"/> : <AboutUs />} />
      <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute user={user}/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/details" element={<WorkDetails/>}/>
      </Route>
      
    </Routes>
  );
};

export default Navigation;
