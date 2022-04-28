import React from 'react';
import Header from '../components/searchesPerformedList/header/Header';
import Body from '../components/searchesPerformedList/Body';

import './SearchesPerformedList.css';

const SearchesPerformedList = () => {
  return (
    <div className="main-container">
      <Header />
      <Body />
    </div>
  );
};

export default SearchesPerformedList;