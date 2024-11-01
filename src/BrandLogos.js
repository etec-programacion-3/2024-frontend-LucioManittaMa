import React from 'react';
import { Link } from 'react-router-dom';
import adidaslogo from './../src/assets/logos_marcas/adidas.png';
import dclogo from './../src/assets/logos_marcas/dc_logo.png';
import nikelogo from './../src/assets/logos_marcas/nike_logo.png';
import pumalogo from './../src/assets/logos_marcas/puma_logo.png';
import vanslogo from './../src/assets/logos_marcas/vans_logo.png';

function BrandLogos() {
  const brands = [
    { name: 'Adidas', logo: adidaslogo, path: '/models/Adidas' },
    { name: 'DC', logo: dclogo, path: '/models/DC' },
    { name: 'Nike', logo: nikelogo, path: '/models/Nike' },
    { name: 'Puma', logo: pumalogo, path: '/models/Puma' },
    { name: 'Vans', logo: vanslogo, path: '/models/Vans' },
  ];

  return (
    <div className="brand-logos">
      {brands.map((brand) => (
        <div className="brand-logo" key={brand.name}>
          <Link to={brand.path}>
            <img src={brand.logo} alt={brand.name} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BrandLogos;
