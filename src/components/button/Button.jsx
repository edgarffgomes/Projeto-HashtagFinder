import React from "react";
import styles from "./Button.css";

const Button = ({ children, style }) => {
  return <button className={styles.style}>{children}</button>;
};

export default Button;
