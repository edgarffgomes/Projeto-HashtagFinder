import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import SearchesPerformedList from '../pages/search/SearchesPerformedList';
// import Login from '../pages/login/Login'; com problema att joao
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/search" element={<SearchesPerformedList />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
