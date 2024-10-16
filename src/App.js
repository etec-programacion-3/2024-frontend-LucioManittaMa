import React, { useState } from 'react';
import './App.css';
import logo from './UrbanLogo.png';

// Componente Header
function Header({ isLoggedIn }) {
  return (
    <header className="App-header">
      <div className="header-content">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">Search</button>
        </div>
        <div className="auth-buttons">
          <button className="auth-button">Sign In</button>
          <button className="auth-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

// Componente Marcas
function BrandLogos() {
  const brands = [
    { name: 'Adidas', logo: './assets/logos_marcas/adidas.png' },
    { name: 'DC Shoes', logo: 'dc.png' },
    { name: 'Nike', logo: 'nike.png' },
    { name: 'Puma', logo: 'puma.png' },
    { name: 'Vans', logo: 'vans.png' },
  ];

  return (
    <div className="brand-logos">
      {brands.map((brand) => (
        <div className="brand-logo" key={brand.name}>
          <img src={brand.logo} alt={brand.name} />
        </div>
      ))}
    </div>
  );
}

// Componente Productos Destacados
function FeaturedProducts() {
  const products = [
    { id: 1, image: './assets/adidas/campus.png', name: 'Zapatilla 1' },
    { id: 2, image: 'zapatilla2.jpg', name: 'Zapatilla 2' },
    { id: 3, image: 'zapatilla3.jpg', name: 'Zapatilla 3' },
    { id: 4, image: 'zapatilla4.jpg', name: 'Zapatilla 4' },
  ];

  return (
    <div className="featured-products">
      <h2>PRODUCTOS DESTACADOS</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente App
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      <BrandLogos />
      <FeaturedProducts />
    </div>
  );
}

export default App;
