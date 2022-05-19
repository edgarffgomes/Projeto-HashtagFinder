import React from "react";
import { Link } from 'react-router-dom'
import styles from "./Body.module.css";
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from 'react-router-dom';
import logoutIcon from "../../img/icon-power-off.svg"

const Body = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    console.log(auth)
  }
  return (
    <>
      <nav className={styles.bgNav}>
        <div className={styles.bgTitle}>
          <Link to="/">
            <h2>
              hashtag<strong>finder</strong>
            </h2>
          </Link>
        </div>

        <div className={styles.bgButton}>
            <button onClick={handleLogout}><img src={logoutIcon}/> Sair</button>
        </div>
      </nav>
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
    </>
  );
};

export default Body;
