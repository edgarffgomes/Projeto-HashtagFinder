
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import About from '../pages/about/About';
import SearchesPerformedList from '../pages/search/SearchesPerformedList';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchesPerformedList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
