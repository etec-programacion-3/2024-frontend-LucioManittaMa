import React from 'react';
import './App.css';
import campus from './../src/assets/adidas/campus.png';
import knu_skool from './../src/assets/vans/knu_skool.png';
import air_jordan_1_mid from './../src/assets/nike/air_jordan_1_mid.png';
import manteca4 from './../src/assets/dc/manteca4.png';

function FeaturedProducts() {
  const products = [
    { id: 1, image: campus, name: 'Campus 2000s' },
    { id: 2, image: knu_skool, name: 'Knu Skool' },
    { id: 3, image: air_jordan_1_mid, name: 'Air Jordan 1 Mid' },
    { id: 4, image: manteca4, name: 'Manteca 4' },
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

export default FeaturedProducts;
