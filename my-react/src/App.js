import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header'; // Import your Header component
import Footer from './components/Footer'; // Import your Footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include your Header component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer /> {/* Include your Footer component */}
      </div>
    </Router>
  );
}

export default App;
