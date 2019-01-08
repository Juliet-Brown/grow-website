import React from "react";
import styles from "./home-css-modules.module.scss";
import flexStyles from "../components/flex.module.scss";
import Container from "../components/container";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

console.log(styles);

export default () => (
  <div>
    <Header springLoad="Springload" about="about" home="home" join="join" />
    <div
      className={`${flexStyles.flex__container} ${styles.banner}
      ${flexStyles.flex__center} ${styles.itemCenter} ${styles.imageHeight} ${
        styles.centerImage
      }`}
    >
      <aside className={`${styles.banner__overlay}`}>
        <h2>LEARN/GROW!</h2>
        <p>
          Put your content here, Put your content here, Put your content here
        </p>
        <div
          className={`${flexStyles.flex__container}
        ${flexStyles.flex__center}`}
        >
          <a href="/about-css-modules" className={`${styles.action}`}>
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
