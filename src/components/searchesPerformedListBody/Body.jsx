import React from "react";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <main>
      <strong className={styles.title}>Buscas realizadas</strong>
      <img src='../../img/icon-power-off.svg' alt='' />
      <div className={styles["table-container"]}>
        <div className={styles["table-header"]}>
          <span>Hashtag</span>
          <span className={styles.teste}>Data</span>
          <span>Hora</span>
        </div>
        <div className={styles["table-body"]}>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <div className={styles.date}>
              <span>25/02</span>
              <span>09:30</span>
            </div>
          </div>
         
        </div>
      </div>
    </main>
  );
};

export default Body;
