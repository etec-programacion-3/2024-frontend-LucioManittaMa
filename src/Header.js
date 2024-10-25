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
        {/* Contenedor para los enlaces y botones de autenticación */}
        <div className="nav-auth">
          <div className="nav-links">
            <Link to="/">Inicio</Link>
          </div>
          <div className="auth-buttons">
            <button className="auth-button">Sign In</button>
            <button className="auth-button">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
