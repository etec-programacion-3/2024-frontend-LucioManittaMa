// AdidasPage.js
import React from 'react';
import Header from './Header';
import './App.css';

// Importa las imágenes directamente
import CAPro from './assets/puma/CA_pro_classic.png';
import PalermoLTH from './assets/puma/palermo_LTH.png';
import Puma_xray from './assets/puma/puma_x-ray_tour.png';
import RBD_game from './assets/puma/RBD_game.png';
import Suede_classic_XXI from './assets/puma/suede_classic_XXI.png';

const pumaProducts = [
  { id: 1, image: CAPro, name: 'CA Pro', description: 'Clásico y cómodo', price: '$120' },
  { id: 2, image: PalermoLTH, name: 'Palermo LTH', description: 'Estilo retro', price: '$140' },
  { id: 3, image: Puma_xray, name: ' Puma x-ray', description: 'Innovador y ligero', price: '$130' },
  { id: 4, image: RBD_game, name: 'RBD game', description: 'Icónico diseño', price: '$115' },
  { id: 5, image: Suede_classic_XXI, name: 'Suede classic XXI', description: 'Eterna leyenda', price: '$125' },
];
function PumaPage() {
  return (
    <div className="brand-page">
      <h1>Puma - Productos</h1>
      <Header />
      <div className="brand-content">
        <h1>PUMA</h1>
        <div className="product-list">
          {pumaProducts.map((product) => (
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

export default PumaPage;

