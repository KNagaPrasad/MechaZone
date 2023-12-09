import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactInfo';
import SignupPage from './components/Component'; 
import LoginPage from './components/Component'; 
import Navigation from './Links/Navigation';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import './App.css';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Settings from './components/Settings';
import CarParts from './components/CarParts'; 
import BikeParts from './components/Bikepart';
import Cart from './components/Cart'; 
import NewBikePage from './components/NewBikePage';
import NewCarPage from './components/NewCarPage';
import CheckoutPage from './components/CheckOutPage';
import PaymentsPage from './components/PaymentPage';
import SuccessPage from './components/SuccessPage';   // Update the path accordingly
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignupPage />} /> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path ="/dashboard" element={<Dashboard/>}/>
          <Route path ="/logout" element={<Logout/>}/>
          <Route path ="/settings" element={<Settings/>}/>
          <Route path ="/car-search" element={<NewCarPage/>}/> 
          <Route path="/carparts/:brand/:model" element={<CarParts />} />
          <Route path="/bikeparts/:brand/:model" element={<BikeParts />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path ="/bike-search" element={<NewBikePage/>}/> 
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/success" element={<SuccessPage/>} />
          <Route path="/profile" element={<Profile/>}/>

        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App; 