import React from 'react';
import styles from './About.module.css';
import image from '../../img/about-bg.jpg';
export default function About() {
  return (
    <div className={styles.bgAbout}>
      <img className={styles.imgAbout} src={image} alt="imgAbout" />
    

    </div>
  );
}
