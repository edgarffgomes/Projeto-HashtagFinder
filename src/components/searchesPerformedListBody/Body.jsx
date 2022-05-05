import React from "react";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <main>
      <strong className={styles.title}>Buscas realizadas</strong>
      <div className={styles["table-container"]}>
        <div className={styles["table-header"]}>
          <span>Hashtag</span>
          <span>Data</span>
          <span>Hora</span>
        </div>
        <div className={styles["table-body"]}>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
          <div className={styles["table-body-line"]}>
            <span className={styles.hashName}>#HashTagName</span>
            <span>25/02</span>
            <span>09:30</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
