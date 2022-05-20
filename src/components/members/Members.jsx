import React from 'react';
import styles from './Members.module.css';

const Members = ({ children }) => {
  return (
    <section className={styles.container}>
      <span>
        <h2 className={styles.title}>Quem somos </h2>
      </span>
      <div className={styles.gridContainer}>{children}</div>
    </section>
  );
};

export default Members;
