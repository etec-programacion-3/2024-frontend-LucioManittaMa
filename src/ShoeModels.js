// AdidasPage.js
import React from 'react';
import Header from './Header';
import './App.css';

// Importa las imágenes directamente
import campus from './assets/adidas/campus.png';
import forumLow from './assets/adidas/forum_low.png';
import lwst from './assets/adidas/lwst.png';
import sambaOg from './assets/adidas/samba_og.png';
import superstar from './assets/adidas/superstar.png';

const adidasProducts = [
  { id: 1, image: campus, name: 'Campus 2000s', description: 'Clásico y cómodo', price: '$120' },
  { id: 2, image: forumLow, name: 'Forum Low', description: 'Estilo retro', price: '$140' },
  { id: 3, image: lwst, name: 'Lwst', description: 'Innovador y ligero', price: '$130' },
  { id: 4, image: sambaOg, name: 'Samba OG', description: 'Icónico diseño', price: '$115' },
  { id: 5, image: superstar, name: 'Superstar', description: 'Eterna leyenda', price: '$125' },
];
function AdidasPage() {
  return (
    <div className="brand-page">
      <h2>ADIDAS</h2>
      <Header />
      <div className="brand-content">
        <h1>ADIDAS</h1>
        <div className="product-list">
          {adidasProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdidasPage;

