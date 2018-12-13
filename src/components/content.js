import React from "react";
import contentStyles from "./content-css-modules.scss";

export default () => (
  <div
    className={`{contentStyles.flex__container} ${contentStyles.flex__item}`}
  >
    <main
      className={`${contentStyles.flex_item} ${contentStyles.content} ${
        contentStyles.flex__container
      }
    ${contentStyles.flexCenter}`}
    >
      <div className={`${contentStyles.sidebar} ${contentStyles.contentLeft}`}>
        <h2>Upcoming Events</h2>
        <p>
          What? We're not at all alike! Some days you get the bear, and some
          days the bear gets you. Maybe if we felt any human loss as keenly as
          we feel one of those close to us, human history would be far less
          bloody. Yesterday I did not know how to eat gagh.
        </p>{" "}
      </div>
      <div className={`${contentStyles.sidebar} ${contentStyles.contentRight}`}>
        <h2>Recent tweets </h2>
        Lorem ipsum amet magna ex dolor enim veniam officia sit dolore ullamco
        exercitation aliqua excepteur ad amet ut exercitation duis aliqua ex ut
        in laborum aliquip.
      </div>
    </main>

    <div
      className={`${contentStyles.flex__container}
      ${contentStyles.flexCenter} ${contentStyles.itemCenter} ${
        contentStyles.imageHeight
      } ${contentStyles.centerImage}`}
    >
      <aside
        className={`${contentStyles.sidebar} ${contentStyles.sidebarLeft}`}
      >
        <h2>Left Sidebar</h2>
        <p>
          Put your content here, Put your content here, Put your content
          here,Put your content here
        </p>
      </aside>
      <aside
        className={`${contentStyles.sidebar} ${contentStyles.sidebarRight}`}
      >
        <h2>Right Sidebar</h2>
        <p>
          Put your content here, Put your content here ,Put your content
          here,Put your content here
        </p>
      </aside>
    </div>
  </div>
);
