import React from "react";
import styles from "./Body.module.css";

const Body = ({ hashtags }) => {
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
          {React.Children.toArray(
            hashtags?.map(({ data, horario, hashtag }) => {
              return (
                <div className={styles["table-body-line"]}>
                  <span className={styles.hashName}>#{hashtag}</span>
                  <span>{data.substring(0, 5)}</span>
                  <span>{horario}</span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default Body;
