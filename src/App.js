import React from 'react';
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
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<><BrandLogos /><FeaturedProducts /></>} />
          
          {/* Rutas de modelos de zapatillas */}
          <Route path="/models/Adidas" element={<ShoeModels />} />
          <Route path="/models/Nike" element={<ShoeModelsNike />} />
          <Route path="/models/DC" element={<ShoeModelsDC />} />
          <Route path="/models/Puma" element={<ShoeModelsPuma />} />
          <Route path="/models/Vans" element={<ShoeModelsVans />} />

          {/* Ruta de Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
