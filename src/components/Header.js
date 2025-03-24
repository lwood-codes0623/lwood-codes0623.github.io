// src/components/Header.js
import React from 'react';
import './Header.css';  // We'll create this CSS file for styling

function Header() {
  return (
    <header className="lwood-header">
      <h1>Lwood Codes</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

