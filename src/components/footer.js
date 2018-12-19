import React from "react";
import footerStyles from "./footer-css-modules.scss";

export default ({footerDescription}) => (
  <footer
    className={`${footerStyles.flex__container} ${footerStyles.flexCenter} ${footerStyles.footer}`}
  >
    &copy; {footerDescription}
    <main
    className={`${footerStyles.flexItem} ${footerStyles.content} ${footerStyles.flex__container}
  ${footerStyles.flexCenter}`}
    >
      <div className={`${footerStyles.sidebar} ${footerStyles.contentLeft}`}>
        <h3>Making Tech Better Since 2009</h3>
        <p>
          What? We're not at all alike! Some days you get the bear, and some
          days the bear gets you. Maybe if we felt any human loss as keenly as
          we feel one of those close to us, human history would be far less
          bloody. Yesterday I did not know how to eat gagh.
        </p>{" "}
      </div>
    </main>
  </footer>

);