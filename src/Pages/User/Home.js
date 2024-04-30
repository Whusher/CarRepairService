import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Components/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  useEffect(()=>{
    toast.success('Welcome to CRS');
  })
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
