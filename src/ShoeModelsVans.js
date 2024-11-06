// AdidasPage.js
import React from 'react';
import Header from './Header';
import './App.css';

// Importa las imágenes directamente
import KnuSkool from "./assets/vans/knu_skool.png"
import OldSkool from "./assets/vans/old_skool.png"
import SK8Hi from "./assets/vans/sk8_hi.png"
import SkateAuthentic from "./assets/vans/skate_authentic.png"
import SkateSlipon from "./assets/vans/skate_slip-on.png"

const vansProducts = [
  { id: 1, image: KnuSkool, name: 'KnuSkool', description: 'Chunky', price: '$120' },
  { id: 2, image: OldSkool, name: 'OldSkool', description: 'Clasico', price: '$120' },
  { id: 3, image: SK8Hi, name: 'SK8Hi', description: 'Clasico', price: '$120' },
  { id: 4, image: SkateAuthentic, name: 'SkateAuthentic', description: 'Clasico', price: '$120' },
  { id: 5, image: SkateSlipon, name: 'SkateSlip-on', description: 'Clasico', price: '$120' },

];
function VansPage() {
  return (
    <div className="brand-page">
      <h1>Vans - Productos</h1>
      <Header />
      <div className="brand-content">
        <h1>VANS</h1>
        <div className="product-list">
          {vansProducts.map((product) => (
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

export default VansPage;

