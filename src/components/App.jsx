import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './Navbar.jsx';
import { Header } from './Header.jsx';

function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/about" element={<Header />} /> 
        <Route path="*" element={<Navigate to="/about" />} /> 
      </Routes>
    </>
  );
}

export default App;
