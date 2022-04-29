import React from 'react';
import styles from './Home.module.css';
import Container from '../../components/container/Container';
import IconSearch from '../../img/icon-search.svg';
const Home = () => {
  return (
    <>
      <Container>
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
          {/* background do input de pesquisas */}
          <div className={styles.bgSearch}>
            <img src={IconSearch} alt="" />
          </div>
        </header>
      </Container>
    </>
  );
};

export default Home;
