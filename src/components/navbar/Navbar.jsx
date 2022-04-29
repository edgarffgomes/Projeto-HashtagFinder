import '../../css/Global.css';
import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.bgNav}>
      <div className={styles.bgTitle}>
        <Link to="/">
          <h2>
            hashtag<strong>finder</strong>
          </h2>
        </Link>
      </div>
      <div className={styles.bgButton}>
        <Link to="/about">
          <button className={styles.bgAbout}>SOBRE</button>
        </Link>

        <Link to="/login">
          <button className={styles.bgLogin}>LOGIN</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
