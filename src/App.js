import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { AuthProvider } from './Components/AuthContext';

function App() { 
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
