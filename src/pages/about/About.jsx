import styles from './About.module.css';
import illustration from '../../img/about-illustration.svg';
import Navbar from '../../components/navbar/Navbar';
import Members from '../../components/members/Members';
import Footer from '../../components/footer/Footer';

/* ICONES DO NAVBAR */
import iconLogin from '../../img/icon-user-alt.svg';
import iconHome from '../../img/icon-home.svg';
import iconGithub from '../../img/icon-github.svg';
import iconMail from '../../img/icon-mail.svg';
import iconLinkedin from '../../img/icon-linkedin.svg';
import React, { useEffect, useState } from 'react';

const About = () => {
  /* configuração do navbar */
  const [ativaNav, setAtivaNav] = useState(false);

  const [dados, setDados] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?view=Grid%20view&filterByFormula={Squad}=260422',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer key2CwkHb0CKumjuM',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setTexto(data.records[0].fields.Sobre);
      })
      .catch((erro) => console.log(erro));

    fetch(
      'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?view=Grid%20view&filterByFormula={Squad}=260422',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer key2CwkHb0CKumjuM',
        },
      },
    )
      .then((response) => response.json())
      .then(function (data) {
        setDados(data.records);
        console.log(data);
      })
      .catch((erro) => console.log(erro));
  }, []);

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 410) {
        setAtivaNav(true);
      } else {
        setAtivaNav(false);
      }
    }
    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <>
      <Navbar
        acao={ativaNav}
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
            icon: iconLogin,
            title: 'LOGIN',
            backgroundColor: ' #3634f7',
            textColor: '#ffff',
          },
        ]}
      />
      <header className={styles.bgHeader}>
        <div className={styles.bgAbout}>
          <h1 className={styles.bgTitle}>Sobre o projeto</h1>
        </div>
      </header>
      <main>
        <section className={styles.container}>
          <div className={styles.paragraph}>
            <h2 className={styles.paragraphTitle}>O que é</h2>
            {/* como usar o dangerouslySetInnerHTML 
            https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/

            Ele é usado pra renderizar um conteúdo dinâmico
            */}
            <p dangerouslySetInnerHTML={{ __html: texto }}></p>
          </div>
          <div className={styles.containerIllustration}>
            <img
              className={styles.illustration}
              src={illustration}
              alt="ilustração"
            />
          </div>
        </section>

        <Members>
          {dados.map((item) => (
            <div key={item.id} className={styles.itemContainer}>
              <div className={styles.item}>
                <img
                  className={styles.photo}
                  src={item.fields.Imagem[0].url}
                  alt="foto joão"
                />
                <span>
                  <h3 className={styles.name}>{item.fields.Nome}</h3>
                  <p className={styles.paragraphResume}>
                    {item.fields['Descrição']}
                  </p>
                </span>
                <div className={styles.socialIcons}>
                  <a
                    href={item.fields.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconGithub} alt="icone github" />
                  </a>
                  <a
                    href={item.fields.Email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconMail} alt="icone facebook" />
                  </a>
                  <a
                    href={item.fields.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconLinkedin} alt="icone linkedin" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Members>
      </main>
      <Footer />
    </>
  );
};
export default About;

{
  /* {dados.map((item) => (
          <Members
            key={item.id}
            img={item.fields.Imagem[0].url}
            name={item.fields.Nome}
            text={item.fields['Descrição']}
          />
        ))} */
}
