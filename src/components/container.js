import React from "react";
import styles from "./container.module.scss";

export default ({ children }) => (
  <div
    className={styles.home__container}
    className={styles.flex__container}
    className={styles.flexColumn}
    className={styles.fullHeight}
    className={styles.whiteBackground}
  >
    {children}
  </div>
);
