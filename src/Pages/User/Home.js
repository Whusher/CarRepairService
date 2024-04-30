import React, { useContext } from "react";
import { AuthContext } from "../../Components/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
