import '../../css/Global.css';
import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar({ buttons, acao }) {
  return (
    <div className={acao ? styles.ativaNav : styles.bgNavbar}>
      <nav className={styles.bgNav}>
        <div className={styles.bgTitle}>
          <Link to="/">
            <h2>
              hashtag<strong>finder</strong>
            </h2>
          </Link>
        </div>
        <div className={styles.bgButton}>
          {buttons.map((button) => {
            /* ESTILIZAÇÃO DO BOTÃO */

            let buttonColor = {
              backgroundColor: button.backgroundColor,
              color: button.textColor,
              minWidth: button.minWidth,
              margin: button.margin,
            };
            return (
              <Link key={button.route} to={button.route}>
                <button className={styles.bgButtonSelected} style={buttonColor}>
                  <img src={button.icon} alt="info-icon" />
                  {button.title}
                </button>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
