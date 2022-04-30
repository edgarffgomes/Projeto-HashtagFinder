import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Body from '../../components/searchesPerformedList/Body';
import './SearchesPerformedList.css';

/* se possivel utilize o css por modulo para evitar que outras partes da pagina
sejam reescritas  e tome cuidado para chamar tags sem classe para n reescrever as outras de outras paginas..
fora isso não encontrei problemas de sintaxe por aqui ja chamei a sua rota
e o alexandre criou ela. Para visualizar a sua rota digite no navegador:
http://localhost:3000/search

Opcional  de uma olhada no mome das suas pastas e componentes e também na estrutura de pastas

 att joao
*/

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
