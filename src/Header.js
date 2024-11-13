// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './UrbanLogo.png';

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">Search</button>
        </div>
        <div className="nav-auth">
          <div className="nav-links">
            <Link to="/">Inicio</Link>
          </div>
          <div className="auth-buttons">
            <Link to="/login" ><button className="auth-button">Sign In</button></Link>
            <Link to="/signup"><button className="auth-button">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

