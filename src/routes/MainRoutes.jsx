import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
<<<<<<< HEAD
import Login from '../pages/login/Login';
=======
import About from '../pages/about/About';
import SearchesPerformedList from '../pages/search/SearchesPerformedList';
// import Login from '../pages/login/Login'; com problema att joao
>>>>>>> main
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />}/>
=======
        <Route path="/about" element={<About />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/search" element={<SearchesPerformedList />} />
       
>>>>>>> main
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
