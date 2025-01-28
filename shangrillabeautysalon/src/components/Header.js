import React from 'react';
import '../styles/global.css'; // Adjust the path relative to Header.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Updated for React Router v6


const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Shangrilla Beauty Salon</h1>
        </div>
        <ul>
          <li><a href="#contact">Contact Us</a></li>
          {/* <li><a href="#destinations">Cart</a></li> */}
          {/* <li><a href="#services">Services</a></li>
          <li><a href="#home">Home</a></li> */}
          {/* <li><a href="#login">Login</a></li> */}
          <li><Link to="/cart">Cart</Link></li> {/* Link to Login page */}
          <li><Link to="/login">Login</Link></li> {/* Link to Login page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
