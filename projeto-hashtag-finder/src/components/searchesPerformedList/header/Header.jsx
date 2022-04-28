import React from "react";
import Button from "../../button/Button";
import styles from "./Header.module.css";
import "../../../css/Global.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.bgHeader}>
      <div>
        <h2>
          hashtag<strong>finder</strong>
        </h2>
      </div>
      <div className={styles.bgButton}>
        <Button style={styles}>
          <div className={styles.imgButtonInfo}></div>
          SOBRE
        </Button>
        <Button className={styles}>
          <div className={styles.imgButtonLogout}></div>
          SAIR
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
