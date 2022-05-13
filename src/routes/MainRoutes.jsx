
import React, {useState} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import About from '../pages/about/About';
import SearchesPerformedList from '../pages/search/SearchesPerformedList';


const MainRoutes = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged}/>} />
        <Route path="/260422" element={<SearchesPerformedList />} />
        <Route path="/search" element={isLogged ? <Navigate to = "/260422" /> : <Navigate redirect to = "/login"/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
