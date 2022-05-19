
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import About from '../pages/about/About';
import { AuthProvider } from "../contexts/Auth";
import { RequireLogin } from "../contexts/RequireLogin";
import { CheckLogin } from "../contexts/CheckLogin";
import SearchesPerformedList from '../pages/search/SearchesPerformedList';


const MainRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<CheckLogin><Login/></CheckLogin>} />
          <Route path="/search" element={<RequireLogin><SearchesPerformedList/></RequireLogin>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default MainRoutes;
