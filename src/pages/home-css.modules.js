import React from "react";
import styles from "./home-css-modules.module.scss";
import Container from "../components/container";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

console.log(styles);

// const Header = props => (
//   <div className={`${styles.header__navigation}`}>
//     <div className={`${styles.header__item}  ${styles.flex__item} `}>
//       <span className={`${styles.header__grow}`}>GROW </span>
//       <a
//         className={`${styles.header__item}  `}
//         href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"
//       >
//         {props.springLoad}
//       </a>
//     </div>
//     <div className={styles.logo} />
//     <ul
//       className={`${styles.header__list} ${styles.flex__container} ${
//         styles.flexEnd
//       }`}
//     >
//       <li>
//         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
//           {props.home}
//         </a>
//       </li>
//       <li>
//         <a href="/about-css-modules">{props.about}</a>
//       </li>
//       <li>
//         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
//           {props.contact}
//         </a>
//       </li>
//       <li>
//         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
//           {props.join}
//         </a>
//       </li>
//     </ul>
//   </div>
// );

// const Content = props => (
  // <div className={styles.flex__container} className={styles.flex__item}>
  //   <main
  //     className={`${styles.flex_item} ${styles.content}`}
  //     className={`${styles.flex__container}
  //   ${styles.flexCenter}`}
  //   >
  //     <div className={`${styles.sidebar} ${styles.contentLeft}`}>
  //       <h2>Upcoming Events</h2>
  //       <p>
  //         What? We're not at all alike! Some days you get the bear, and some
  //         days the bear gets you. Maybe if we felt any human loss as keenly as
  //         we feel one of those close to us, human history would be far less
  //         bloody. Yesterday I did not know how to eat gagh.
  //       </p>{" "}
  //     </div>
  //     <div className={`${styles.sidebar} ${styles.contentRight}`}>
  //       <h2>Recent tweets </h2>
  //       Lorem ipsum amet magna ex dolor enim veniam officia sit dolore ullamco
  //       exercitation aliqua excepteur ad amet ut exercitation duis aliqua ex ut
  //       in laborum aliquip.
  //     </div>
  //   </main>
  //
  //   <div
  //     className={`${styles.flex__container}
  //     ${styles.flexCenter} ${styles.itemCenter} ${styles.imageHeight} ${
  //       styles.centerImage
  //     }`}
  //   >
  //     <aside className={`${styles.sidebar} ${styles.sidebarLeft}`}>
  //       <h2>Left Sidebar</h2>
  //       <p>
  //         Put your content here, Put your content here, Put your content
  //         here,Put your content here
  //       </p>
  //     </aside>
  //     <aside className={`${styles.sidebar} ${styles.sidebarRight}`}>
  //       <h2>Right Sidebar</h2>
  //       <p>
  //         Put your content here, Put your content here ,Put your content
  //         here,Put your content here
  //       </p>
  //     </aside>
  //   </div>
  // </div>
// );

// const Footer = props => (
//   <footer
//     className={styles.flex__container}
//     className={styles.flexCenter}
//     className={styles.footer}
//   >
//     &copy; {props.footerDescription}
//     <main
//       className={`${styles.flexItem} ${styles.content}`}
//       className={`${styles.flex__container}
//     ${styles.flexCenter}`}
//     >
//       <div className={`${styles.sidebar} ${styles.contentLeft}`}>
//         <h3>Making Tech Better Since 2009</h3>
//         <p>
//           What? We're not at all alike! Some days you get the bear, and some
//           days the bear gets you. Maybe if we felt any human loss as keenly as
//           we feel one of those close to us, human history would be far less
//           bloody. Yesterday I did not know how to eat gagh.
//         </p>{" "}
//       </div>
//     </main>
//   </footer>
// );

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
