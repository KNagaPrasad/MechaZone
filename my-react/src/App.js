
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/Pages/HomePage';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Signupandlogin from '../src/components/Component';
import Bikes from '../src/components/Bike';
import ContactInfo from '../src/components/ContactInfo'; 


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signupandlogin />} />
          <Route path="/login" element={<Signupandlogin />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/ContactInfo" element={<ContactInfo />} /> {}
          <Route path="/contact-info" element={<ContactInfo />} /> {}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
