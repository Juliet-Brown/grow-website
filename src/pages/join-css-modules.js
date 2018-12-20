import React from "react";
import styles from "./join-css-modules.module.scss";
import Container from "../components/container";
import Header from "../components/header";
import Content from "../components/content-join";
import Footer from "../components/footer";

console.log(styles);

export default () => (
  <div>
    <Header
      springLoad="Springload"
      about="about"
      home="home"
      join="join"
    />
    <div
      className={`${styles.flex__container} ${styles.banner}
      ${styles.flexCenter} ${styles.itemCenter} ${styles.imageHeight} ${
        styles.centerImage
      }`}
    >
      <aside className={`${styles.banner__overlay}`}>
        <h2>JOIN GROW!</h2>

      </aside>
    </div>
    <Container>
      <Content />
    </Container>
    <Footer footerDescription="Springload" />
  </div>
);
