import React from 'react';
import Button from '../button/Button';
import styles from './Header.module.css';
import '../../css/Global.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bgHeader}>
        <div>
          <h2>
            hashtag<strong>finder</strong>
          </h2>
        </div>
        <div>
          <Button style={styles}>SOBRE</Button>
          <Button>LOGIN</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
