import React from 'react';
import styles from './Home.module.css';
import Container from '../../components/container/Container';
import IconSearch from '../../img/icon-search.svg';
import Navbar from '../../components/navbar/Navbar';
const Home = () => {
  return (
    <>
      <Container>
        <Navbar></Navbar>
        {/* background do cabeçalho */}
        <header className={styles.bgHeader}>
          {/* background do titulo */}
          <div className={styles.bgTitle}>
            <h1>Encontre hashtags de maneira fácil</h1>
            <p>
              Digite o que deseja no campo de buscas e confira os resultados do
              Twitter abaixo
            </p>
          </div>
          {/* background do campo de pesquisa*/}
          <div className={styles.bgSearch}>
            {/* background da imagem do campo de pesquisa */}
            <div className={styles.bgImageSearch}>
              <img src={IconSearch} alt="" />
            </div>
            {/* background do input de pesquisa */}
            <div className={styles.bgInputSearch}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Buscar..."
              />
            </div>
          </div>
        </header>
      </Container>
    </>
  );
};

export default Home;
