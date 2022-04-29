import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import SearchesPerformedList from "../pages/search/SearchesPerformedList";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<SearchesPerformedList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
