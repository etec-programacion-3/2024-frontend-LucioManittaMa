import React, { useState } from 'react';
import './App.css';
import logo from './UrbanLogo.png';

import adidaslogo from './../src/assets/logos_marcas/adidas.png';
import dclogo from './../src/assets/logos_marcas/dc_logo.png';
import nikelogo from './../src/assets/logos_marcas/nike_logo.png';
import pumalogo from './../src/assets/logos_marcas/puma_logo.png';
import vanslogo from './../src/assets/logos_marcas/vans_logo.png';
//Imagenes de zapatillas DESTACADAS
import campus from './../src/assets/adidas/campus.png';
import forum_low from './../src/assets/adidas/forum_low.png';
import lwst from './../src/assets/adidas/lwst.png';
import samba_og from './../src/assets/adidas/samba_og.png';
import superstar from './../src/assets/adidas/superstar.png';
import superstar_xlg from './../src/assets/adidas/superstar_xlg.png';


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
    { name: 'Adidas', logo: [adidaslogo]} ,
    { name: 'DC Shoes', logo: [dclogo] },
    { name: 'Nike', logo: [nikelogo] },
    { name: 'Puma', logo: [pumalogo] },
    { name: 'Vans', logo: [vanslogo] },
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
    { id: 1, image: [campus], name: 'Campus2000s' },
    { id: 2, image: [samba_og], name: 'Samba'  },
    { id: 3, image: [superstar], name: 'Superstar'  },
    { id: 4, image: [forum_low], name: 'Forum Low'  },
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
