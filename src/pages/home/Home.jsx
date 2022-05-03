import React from 'react';
/* CSS */
import styles from './Home.module.css';
/* COMPONENTES */
import Container from '../../components/container/Container';
import IconSearch from '../../img/icon-search.svg';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
/* CARROSEL */
import { Slider, Slide } from '../../components/slider/ExportPattern';

const Home = () => {
  /* configuração do carrosel */
  const settings = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };
  return (
    <>
      <Container>
        <Navbar fButton="SOBRE" sButton="LOGIN" />
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
        <main className={styles.bgMain}>
          <div className={styles.bgDisplaySearch}>
            <h2>Exibindo os 10 resultados mais recentes para #natureza</h2>
          </div>

          <Slider settings={settings}>
            <Slide>
              <img
                src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                alt="Teste"
                height="287px"
                width="287px"
              />
            </Slide>
            <Slide>
              <img
                src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                alt="Teste"
                height="287px"
                width="287px"
              />
            </Slide>
            <Slide>
              <img
                src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                alt="Teste"
                height="287px"
                width="287px"
              />
            </Slide>
            <Slide>
              <img
                src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                alt="Teste"
                height="287px"
                width="287px"
              />
            </Slide>
            <Slide>
              <img
                src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                alt="Teste"
                height="287px"
                width="287px"
              />
            </Slide>
          </Slider>
        </main>

        <Footer />
      </Container>
    </>
  );
};

export default Home;
