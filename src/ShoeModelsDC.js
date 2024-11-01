import React from 'react';
import Header from './Header';
import './App.css';

// Importa las imágenes directamente
import Manteca4 from './assets/dc/manteca4.png';
import Pure from './assets/dc/pure.png';


const DcProducts = [
    { id: 1, image: Manteca4, name: 'Manteca4', description: 'Clásico y cómodo', price: '$120' },
    { id: 2, image: Pure, name: 'Pure', description: 'Clásico y cómodo', price: '$120' },

  ];
  function DcPage() {
    return (
      <div className="brand-page">
        <Header />
        <div className="brand-content">
          <h1>DC - Productos</h1>
          <div className="product-list">
            {DcProducts.map((product) => (
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

export default DcPage;