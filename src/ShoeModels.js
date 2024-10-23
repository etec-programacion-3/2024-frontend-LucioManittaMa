import React from 'react';
import { useParams } from 'react-router-dom';

const shoeData = {
  Adidas: [
    { id: 1, name: 'Campus 2000s', image: './../src/assets/adidas/campus.png' },
    { id: 2, name: 'Samba OG', image: './../src/assets/adidas/samba_og.png' },
  ],
  Nike: [
    { id: 1, name: 'Air Max', image: './../src/assets/nike/air_max.png' },
    { id: 2, name: 'Cortez', image: './../src/assets/nike/cortez.png' },
  ],
  // Agrega más marcas y modelos aquí
};

const ShoeModels = () => {
  const { brand } = useParams(); 
  const models = shoeData[brand]; 

  if (!models) {
    return <h2>No hay modelos disponibles para esta marca</h2>;
  }

  return (
    <div>
      <h1>Modelos de {brand}</h1>
      <div className="shoe-grid">
        {models.map((model) => (
          <div key={model.id} className="shoe-card">
            <img src={model.image} alt={model.name} />
            <p>{model.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeModels;
