import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
<<<<<<< HEAD
import About from '../pages/about/About'
=======
import About from '../pages/about/About';
>>>>>>> joao

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/about" element={<About />} />

=======
        <Route path="/about" element={<About/>} />

        
>>>>>>> joao
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
