import styles from './About.module.css';
import illustration from '../../img/about-illustration.svg';
import Navbar from '../../components/navbar/Navbar';
import Members from '../../components/members/Members';

 const About = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className={styles.bgAbout}>
          <h1 className={styles.bgTitle}>Sobre o projeto</h1>
        </div>
      </header>
      <main>
        <section className={styles.container}>
          <div className={styles.paragraph}>
            <h2 className={styles.paragraphTitle}>O que é</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus temporibus nisi debitis doloremque vero,
              consequuntur rerum quod quas vel, tempore, enim sint deleniti
              eveniet sapiente. Aperiam quam laudantium soluta eligendi. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              laborum odio magni inventore optio veritatis ad possimus qui,
              harum aliquid molestias? Fugiat labore blanditiis debitis laborum
              doloribus soluta consequatur facere?
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
    </>
  );
};
export default About
