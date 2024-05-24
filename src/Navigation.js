import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
import Home from "./Pages/User/Home";
import AboutUs from "./Pages/InfoSchema/AboutUs";
import { AuthContext } from "./Components/AuthContext";
import History from "./Pages/User/History";
import WorkDetails from "./Pages/User/WorkDetails";
import Profile from "./Pages/User/Profile";
import CurrentAcepted from "./Pages/User/CurrentAcepted";
import { PrivateRoute } from "./Components/AuthContext";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  const tipoUs = user ? user.type : null;

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
      <Route path="*" element={<><h1>Tas perdido o k?</h1></>} />
      <Route path="/about" element={user ? <Navigate to="/home"/> : <AboutUs />} />
      <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup />} />
      <Route element={<PrivateRoute user={user}/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/details" element={<WorkDetails/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/acepted" element={<CurrentAcepted/>}/>
      </Route>
    </Routes>
  );
};

export default Navigation;
