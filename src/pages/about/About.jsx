import React from 'react';
import styles from './About.module.css';
import illustration from '../../img/about-illustration.svg';
// import Container from '../../components/container/Container';
export default function About() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.bgAbout}>
        <h1 className={styles.bgTitle}>Sobre o projeto</h1>
      </div>

        <section className={styles.container}>
          <div className={styles.paragraph}>
            <h2 className={styles.paragraphTitle}>O que é ?</h2>
            <p>
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea 
            </p>

          </div>
          <div>
          <img className={styles.illustration} src={illustration} alt="ilustração" />
          </div>
        </section>
    </div>
  );
}
