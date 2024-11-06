import React from 'react';
import Header from './Header';
import './App.css';

// Importa las imágenes directamente
import AirJordan1Mid from './assets/nike/air_jordan_1_mid.png';
import DunkLowRetro from './assets/nike/dunk_low_retro.png';
import AirForce1 from './assets/nike/nike_air_force_1.png';
import AirMax90 from './assets/nike/nike_air_max_90.png';
import BlazerMid from './assets/nike/nike_blazer_mid.png';


const nikeProducts = [
    { id: 1, image: AirJordan1Mid, name: 'Air Jordan 1 Mid', description: 'Clásico y cómodo', price: '$120' },
    { id: 2, image: DunkLowRetro, name: 'Dunk Low Retro', description: 'Clásico y cómodo', price: '$120' },
    { id: 3, image: AirForce1, name: 'Air Force 1', description: 'Clásico y cómodo', price: '$120' },
    { id: 4, image: AirMax90, name: 'Air Max 90', description: 'Clásico y cómodo', price: '$120' },
    { id: 5, image: BlazerMid, name: 'Blazer Mid', description: 'Clásico y cómodo', price: '$120' },

  ];
  function NikePage() {
    return (
      <div className="brand-page">
        <h2>PRODUCTOS DESTACADOS</h2>
        <Header />
        <div className="brand-content">
          <h1>NIKE</h1>
          <div className="product-list">
            {nikeProducts.map((product) => (
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

export default NikePage;