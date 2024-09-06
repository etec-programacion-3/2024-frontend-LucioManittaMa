import React, { useState } from 'react';
import './App.css';
import logo from './UrbanLogo.png';

// Componente Header
function Header({ isLoggedIn, cartCount }) {
  return (
    <header className="App-header">
      <div className="header-content">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul className="nav-links">
            <li>
              {!isLoggedIn ? (
                <button className="account-button">Account</button>
              ) : (
                <button className="logout-button">Cerrar Sesión</button>
              )}
            </li>
            {isLoggedIn && (
              <li>
                <div className="cart">
                  <span>Carrito ({cartCount})</span>
                </div>
              </li>
            )}
            <li>
              <button className="search-button">🔍</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Componente Slider
function Slider() {
  return (
    <div className="slider">
      <h2>Zapatillas Destacadas</h2>
      <div className="slider-images">
        <div className="slide" style={{ backgroundImage: "url('zapatilla1.jpg')" }}></div>
        <div className="slide" style={{ backgroundImage: "url('zapatilla2.jpg')" }}></div>
        <div className="slide" style={{ backgroundImage: "url('zapatilla3.jpg')" }}></div>
      </div>
    </div>
  );
}

// Componente Productos Destacados
function ProductosDestacados() {
  const productos = [
    { id: 1, name: 'Zapatilla 1', price: 100 },
    { id: 2, name: 'Zapatilla 2', price: 120 },
    { id: 3, name: 'Zapatilla 3', price: 150 }
  ];

  return (
    <div className="productos-destacados">
      <h3>Productos Destacados</h3>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.name} - ${producto.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente Footer
function Footer() {
  return (
    <footer>
      <p>© 2024 Tienda de Zapatillas. Todos los derechos reservados.</p>
    </footer>
  );
}

// Componente principal App
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} cartCount={cartCount} />
      <main>
        <Slider />
        <ProductosDestacados />
      </main>
      <Footer />
    </div>
  );
}

export default App;

