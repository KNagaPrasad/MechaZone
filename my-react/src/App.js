import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactInfo from './components/ContactInfo'; // Import the ContactInfo component

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-info" element={<ContactInfo />} /> {/* Add this route */}
          <Route path="/signup" element={<Signupandlogin />} />
          <Route path="/login" element={<Signupandlogin />} />
          <Route path="/bikes" element={<Bikes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
