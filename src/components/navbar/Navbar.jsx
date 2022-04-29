import React from "react";
// import Button from '../button/Button';
import styles from "./Navbar.module.css";
import Button from "../button/Button";
import "../../css/Global.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bgHeader}>
        <div>
          <h2>
            hashtag<strong>finder</strong>
          </h2>
        </div>
        <div className={styles.bgButton}>
          <Button style={styles}>
            <div className={styles.imgButtonOn}>
              <img src='../../img/icon-info-circle.svg' alt='' />
            </div>
            SOBRE
          </Button>
          <Button className={styles}>
            <div className={styles.imgButtonLogin}>
              <img src='../../img/icon-user-alt.svg' alt='' />
            </div>
            LOGIN
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
