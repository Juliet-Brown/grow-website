import React from "react";
import styles from "./about-css-modules.module.scss";
import Container from "../components/container";
import Header from "../components/header";
import Content from "../components/content-about";
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
    <Container>
      <Content />
    </Container>
    <Footer footerDescription="Springload" />
  </div>
);
