import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header'; // Import your Header component
import Footer from './components/Footer'; // Import your Footer component
import Component from './components/Component';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include your Header component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Component />} />
        </Routes>
        <Footer /> {/* Include your Footer component */}
      </div>
    </Router>
  );
}

export default App;
