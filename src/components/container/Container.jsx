import React from 'react';
import './Container.css';

const Container = ({ children }) => {
  /* dentro do children irá possuir os elementos filhos */
  return <div className="container">{children}</div>;
};

export default Container;
