import styles from './About.module.css';
import illustration from '../../img/about-illustration.svg';
// import Navbar from '../../components/navbar/Navbar';
import Members from '../../components/members/Members';
import Footer from '../../components/footer/Footer';

/* ICONES DO NAVBAR */
import iconLogin from '../../img/icon-user-alt.svg';
import iconHome from '../../img/icon-home.svg';

const About = () => {
  return (
    <>
      <header className={styles.bgHeader}>
        {/* <Navbar
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
        /> */}
        <div className={styles.bgAbout}>
          <h1 className={styles.bgTitle}>Sobre o projeto</h1>
        </div>
      </header>
      <main>
        <section className={styles.container}>
          <div className={styles.paragraph}>
            <h2 className={styles.paragraphTitle}>O que é</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores
            </p>
          </div>
          <div className={styles.containerIllustration}>
            <img
              className={styles.illustration}
              src={illustration}
              alt="ilustração"
            />
          </div>
        </section>

        <Members />
      </main>
      <Footer />
    </>
  );
};
export default About;
