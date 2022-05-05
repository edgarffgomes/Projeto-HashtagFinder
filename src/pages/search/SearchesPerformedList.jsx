import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Body from '../../components/searchesPerformedListBody/Body';
import './SearchesPerformedList.css';

/* ICONES DO NAVBAR */
import iconLogout from '../../img/icon-power-off.svg';
import iconHome from '../../img/icon-home.svg';

const SearchesPerformedList = () => {
  return (
    <div className="bgNav">
      <Navbar
        buttons={[
          {
            route: '/',
            icon: iconHome,
            title: 'home',
            backgroundColor: ' #d842bd',
            textColor: '#ffff',
          },
          {
            route: '/login',
            icon: iconLogout,
            title: 'sair',
            backgroundColor: ' #3634f7',
            textColor: '#ffff',
          },
        ]}
      />
      <div className="main-container">
        <Body />
      </div>
    </div>
  );
};

export default SearchesPerformedList;
