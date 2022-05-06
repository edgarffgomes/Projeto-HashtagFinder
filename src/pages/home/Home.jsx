import React, { useEffect, useState } from 'react';
/* CSS */
import styles from './Home.module.css';
/* COMPONENTES */
import Container from '../../components/container/Container';
import IconSearch from '../../img/icon-search.svg';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
/* ICONES IMPORTADOS */
import iconAbout from '../../img/icon-info-circle.svg';
import iconLogin from '../../img/icon-user-alt.svg';
/* CARROSEL */
import { Slider, Slide } from '../../components/slider/ExportPattern';
import Card from '../../components/tweetCard/Card';

const Home = () => {
  /* configuração do navbar */
  const [ativaNav, setAtivaNav] = useState(false);

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 750) {
        setAtivaNav(true);
      } else {
        setAtivaNav(false);
      }
    }
    window.addEventListener('scroll', posicaoScroll);
  }, []);

  /* configuração do carrosel */
  const settings = {
    spaceBetween: 50,
    slidesPerView: 5,
    navigation: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      1112: {
        width: 1112,
        slidesPerView: 4,
      },
      768: {
        width: 768,
        slidesPerView: 3,
      },
      480: {
        spaceBetween: 150,
        width: 100,
        slidesPerView: 2,
      },
      414: {
        spaceBetween: 14,
        width: 'max-content',
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <Container>
        <div className={styles.bgNavbar}>
          <Navbar
            acao={ativaNav}
            buttons={[
              {
                route: '/about',
                icon: iconAbout,
                title: 'SOBRE',
                backgroundColor: ' #d842bd',
                textColor: '#ffff',
              },
              {
                route: '/login',
                icon: iconLogin,
                title: 'LOGIN',
                backgroundColor: ' #3634f7',
                textColor: '#ffff',
              },
            ]}
          />
        </div>
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
          <section>
            <Slider settings={settings}>
              <Slide>
                <div className={styles.bgImageGallery}>
                  <img
                    src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                    alt="Teste"
                    height="287px"
                    width="287px"
                  />
                  <p>Postado por:</p>
                  <span>@tweetusername</span>
                </div>
              </Slide>
              <Slide>
                <div className={styles.bgImageGallery}>
                  <img
                    src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                    alt="Teste"
                    height="287px"
                    width="287px"
                  />
                  <p>Postado por:</p>
                  <span>@tweetusername</span>
                </div>
              </Slide>
              <Slide>
                <div className={styles.bgImageGallery}>
                  <img
                    src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                    alt="Teste"
                    height="287px"
                    width="287px"
                  />
                  <p>Postado por:</p>
                  <span>@tweetusername</span>
                </div>
              </Slide>
              <Slide>
                <div className={styles.bgImageGallery}>
                  <img
                    src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                    alt="Teste"
                    height="287px"
                    width="287px"
                  />
                  <p>Postado por:</p>
                  <span>@tweetusername</span>
                </div>
              </Slide>
              <Slide>
                <div className={styles.bgImageGallery}>
                  <img
                    src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                    alt="Teste"
                    height="287px"
                    width="287px"
                  />
                  <p>Postado por:</p>
                  <span>@tweetusername</span>
                </div>
              </Slide>
              <Slide>
                <div className={styles.bgImageGallery}>
                  <img
                    src="https://images.unsplash.com/photo-1595886802423-b92bba08046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
                    alt="Teste"
                    height="287px"
                    width="287px"
                  />
                  <p>Postado por:</p>
                  <span>@tweetusername</span>
                </div>
              </Slide>
            </Slider>
          </section>
          <section className={styles.flexCard}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </main>

        <Footer />
      </Container>
    </>
  );
};

export default Home;
