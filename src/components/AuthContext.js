import React, { createContext, useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    // No necesitas hacer la verificación aquí
  }, []);

  const login = (email) => {
    const newUser = { name: "Aaron", email, token: "123456", type: "1" };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const { user } = useContext(AuthContext);
  const tipoUs = user ? user.type : null;

  if (!user && window.location.pathname !== redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};
