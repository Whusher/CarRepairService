import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { AuthProvider } from './Components/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation/>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
