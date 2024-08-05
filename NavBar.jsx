// src/NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#register">Register</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
