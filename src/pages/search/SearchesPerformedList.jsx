import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Body from "../../components/searchesPerformedListBody/Body";
import "./SearchesPerformedList.css";

const SearchesPerformedList = () => {
  return (
    <div className='bgNav'>
      <Navbar fButton='HOME' sButton='SAIR' />
      <div className='main-container'>
        <Body />
      </div>
    </div>
  );
};

export default SearchesPerformedList;
