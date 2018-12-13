import React from "react";
import styles from "./container.module.scss";

export default ({ children }) => (
  <div
    className={`${styles.home__container} ${styles.flex__container} ${
      styles.flexColumn
    } ${styles.fullHeight} ${styles.whiteBackground}`}
  >
    {children}
  </div>
);
