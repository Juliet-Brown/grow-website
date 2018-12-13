import React from "react";
import styles from "./home-css-modules.module.scss";
import Container from "../components/container";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

console.log(styles);

export default () => (
  <div>
    <Header
      springLoad="Springload"
      about="about"
      home="home"
      contact="contact"
      join="join"
    />
    <div
      className={`${styles.flex__container} ${styles.banner}
      ${styles.flexCenter} ${styles.itemCenter} ${styles.imageHeight} ${
        styles.centerImage
      }`}
    >
      <aside className={`${styles.banner__overlay}`}>
        <h2>LEARN/GROW!</h2>
        <p>
          Put your content here, Put your content here, Put your content here
        </p>
        <div
          className={`${styles.flex__container}
        ${styles.flexCenter}`}
        >
          <a href="index.html" className={`${styles.action}`}>
            Enter
          </a>
        </div>
      </aside>
    </div>
    <Container>
      <Content />
    </Container>
    <Footer footerDescription="Springload" />
  </div>
);
