import React from "react";
import aboutContentStyles from "./content-about.module.scss";

export default () => (
  <div
    className={`${aboutContentStyles.flex__container} ${
      aboutContentStyles.flex__item
    }`}
  >
    <main
      className={`${aboutContentStyles.flex_item} ${
        aboutContentStyles.content
      } ${aboutContentStyles.flex__container}
    ${aboutContentStyles.flexCenter}`}
    >
      <div
        className={`${aboutContentStyles.sidebar} ${
          aboutContentStyles.imageLeft
        } ${aboutContentStyles.flex__container}
      ${aboutContentStyles.flexCenter} ${aboutContentStyles.itemCenter} ${
          aboutContentStyles.imageHeight
        } ${aboutContentStyles.centerImage}`}
      >
        <h2>Image</h2>{" "}
      </div>
      <div
        className={`${aboutContentStyles.sidebar} ${
          aboutContentStyles.sidebarRight
        }`}
      >
        <h2>Who are we?</h2>
        Lorem ipsum amet magna ex dolor enim veniam officia sit dolore ullamco
        exercitation aliqua excepteur ad amet ut exercitation duis aliqua ex ut
        in laborum aliquip.
      </div>

    <aside
      className={`${aboutContentStyles.sidebar} ${
        aboutContentStyles.sidebarLeft
      }`}
    >
      <h2>Things you should know</h2>
      <p>
        Put your content here, Put your content here, Put your content here,Put
        your content here
      </p>
    </aside>
    <aside
      className={`${aboutContentStyles.sidebar} ${
        aboutContentStyles.imageRight
      } ${aboutContentStyles.flex__container}
        ${aboutContentStyles.flexCenter} ${aboutContentStyles.itemCenter} ${
        aboutContentStyles.imageHeight
      } ${aboutContentStyles.centerImage}`}
    >
      <h2>Image</h2>
    </aside>
    </main>
  </div>
);
