import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import BrandLogos from './BrandLogos';
import FeaturedProducts from './FeaturedProducts';
import ShoeModels from './ShoeModels';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<><BrandLogos /><FeaturedProducts /></>} />
          <Route path="/models/:brand" element={<ShoeModels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
