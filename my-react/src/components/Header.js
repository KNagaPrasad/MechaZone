import React from 'react';

import { Link } from 'react-router-dom'; // Import Link
import '../CSS/Header.css';

function Header() {
  return (
    <header className="header">
    
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../CSS/Header.css';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import NavDropDown from './NavDropDown';

function Header() {
  const userFromRedux = useSelector(state => state?.userInfo?.user);

  return (
    <header className="header">
      <div className="dashboard">
        <Logo />
        <NavDropDown user={userFromRedux} />
      </div>
      <nav className="navigation">
        <ul>
          {!userFromRedux && (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </>
          )}
        </ul>
      </nav>
      {userFromRedux && (
        <div className="cart-icon">
          <Link to="/cart">
            {/* Set the color prop to white */}
            <FaShoppingCart size={30} color="white" />
          </Link>
        </div>
      )}

    </header>
  );
}

export default Header;
