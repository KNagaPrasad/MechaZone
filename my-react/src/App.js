import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactInfo';
import SignupPage from './components/Component';
import Bikes from './components/Bike';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import Cars from './components/Car';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
