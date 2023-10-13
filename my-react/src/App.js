import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Signupandlogin from '../src/components/Component'; 
import Bikes from './components/Bike';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signupandlogin />} />
          <Route path="/login" element={<Signupandlogin />} />
          <Route path ="/bikes" element={<Bikes/>}/>
        </Routes>
        <Footer /> {}
      </div>
    </Router>
  );
}

export default App;
