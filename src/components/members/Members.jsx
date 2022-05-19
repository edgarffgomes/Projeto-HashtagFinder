import React from 'react';
import styles from './Members.module.css';
import personalPhoto from '../../img/personal-photo.png';
import iconGithub from '../../img/icon-github.svg';
import iconMail from '../../img/icon-mail.svg';
import iconLinkedin from '../../img/icon-linkedin.svg';
const Members = ({ children }) => {
  return (
    <section className={styles.container}>
      <span>
        <h2 className={styles.title}>Quem somos </h2>
      </span>
      <div className={styles.gridContainer}>
        {children}
        {/* <div className={styles.itemContainer}>
          <div className={styles.item}>
            <img className={styles.photo} src={personalPhoto} alt="foto joão" />
            <span>
              <h3 className={styles.name}>Nome Sobrenome</h3>
              <p className={styles.paragraphResume}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
              </p>
            </span>
            <div className={styles.socialIcons}>
              <img src={iconGithub} alt="icone github" />
              <img src={iconMail} alt="icone facebook" />
              <img src={iconLinkedin} alt="icone linkedin" />
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            <img className={styles.photo} src={personalPhoto} alt="foto joão" />
            <span>
              <h3 className={styles.name}>Nome Sobrenome</h3>
              <p className={styles.paragraphResume}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
              </p>
            </span>
            <div className={styles.socialIcons}>
              <img src={iconGithub} alt="icone github" />
              <img src={iconMail} alt="icone facebook" />
              <img src={iconLinkedin} alt="icone linkedin" />
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            <img className={styles.photo} src={personalPhoto} alt="foto joão" />
            <span>
              <h3 className={styles.name}>Nome Sobrenome</h3>
              <p className={styles.paragraphResume}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
              </p>
            </span>
            <div className={styles.socialIcons}>
              <img src={iconGithub} alt="icone github" />
              <img src={iconMail} alt="icone facebook" />
              <img src={iconLinkedin} alt="icone linkedin" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Members;
