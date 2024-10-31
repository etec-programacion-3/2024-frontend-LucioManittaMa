import React from 'react';
import './App.css';
import campus from './../src/assets/adidas/campus.png';
import forum_low from './../src/assets/adidas/forum_low.png';
import samba_og from './../src/assets/adidas/samba_og.png';
import superstar from './../src/assets/adidas/superstar.png';

function FeaturedProducts() {
  const products = [
    { id: 1, image: campus, name: 'Campus 2000s' },
    { id: 2, image: samba_og, name: 'Samba OG' },
    { id: 3, image: superstar, name: 'Superstar' },
    { id: 4, image: forum_low, name: 'Forum Low' },
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
