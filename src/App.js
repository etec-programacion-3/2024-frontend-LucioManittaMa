import React, {  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import BrandLogos from './BrandLogos';
import FeaturedProducts from './FeaturedProducts';
import ShoeModels from './ShoeModels';
import ShoeModelsNike from './ShoeModelsNike';
import ShoeModelsDC from './ShoeModelsDC';
import ShoeModelsPuma from './ShoeModelsPuma';
import ShoeModelsVans from './ShoeModelsVans';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><BrandLogos /><FeaturedProducts /></>} />
          <Route path="/models/Adidas" element={<ShoeModels />} />
          <Route path="/models/Nike" element={<ShoeModelsNike />} />
          <Route path="/models/Dc" element={<ShoeModelsDC />} />
          <Route path="/models/Puma" element={<ShoeModelsPuma />} />
          <Route path="/models/Vans" element={<ShoeModelsVans />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
