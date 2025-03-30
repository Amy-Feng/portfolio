import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './Navbar.jsx';
import { HomePage } from './HomePage.jsx';

function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
