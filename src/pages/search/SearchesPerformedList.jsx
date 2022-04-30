import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Body from '../../components/searchesPerformedList/Body';
import './SearchesPerformedList.css';

const SearchesPerformedList = () => {
  return (
    <div className="bgNav">
      <Navbar />
      <div className="main-container">
        <Body />
      </div>
    </div>
  );
};

export default SearchesPerformedList;
