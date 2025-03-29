import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './Navbar.jsx';
import { Header } from './Header.jsx';

function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route index element={<Header />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
