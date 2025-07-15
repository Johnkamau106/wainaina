import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">🪽</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;