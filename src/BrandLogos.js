import React from 'react';
import adidaslogo from './../src/assets/logos_marcas/adidas.png';
import dclogo from './../src/assets/logos_marcas/dc_logo.png';
import nikelogo from './../src/assets/logos_marcas/nike_logo.png';
import pumalogo from './../src/assets/logos_marcas/puma_logo.png';
import vanslogo from './../src/assets/logos_marcas/vans_logo.png';

function BrandLogos() {
  const brands = [
    { name: 'Adidas', logo: adidaslogo },
    { name: 'DC Shoes', logo: dclogo },
    { name: 'Nike', logo: nikelogo },
    { name: 'Puma', logo: pumalogo },
    { name: 'Vans', logo: vanslogo },
  ];

  return (
    <div className="brand-logos">
      {brands.map((brand) => (
        <div className="brand-logo" key={brand.name}>
          <img src={brand.logo} alt={brand.name} />
        </div>
      ))}
    </div>
  );
}

export default BrandLogos;
