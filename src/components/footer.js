import React from "react";
import footerStyles from "./footer.module.scss";
import facebook from "../../static/facebook_icon.svg";
import instagram from "../../static/instagram_icon.svg";
import twitter from "../../static/twitter_icon.svg";
import github from "../../static/github_icon.svg";

export default ({ footerDescription }) => (
  <footer
    className={`${footerStyles.flex__container} ${footerStyles.flexCenter} ${
      footerStyles.footer
    }`}
  >
    <main
      className={`${footerStyles.flexItem} ${footerStyles.footer__content} ${
        footerStyles.flex__container
      }
  ${footerStyles.flexCenter}`}
    >
      <div className={` ${footerStyles.footer__contentLeft}`}>
        <h3>Making Tech Better Since 2019</h3>
        <p>
          What? We're not at all alike! Some days you get the bear, and some
          days the bear gets you. Maybe if we felt any human loss as keenly as
          we feel one of those close to us, human history would be far less
          bloody. Yesterday I did not know how to eat gagh.
        </p>{" "}
      </div>
      <div className={` ${footerStyles.footer__contentRight} `}>
        <h3>Space for social media icons.  </h3>
        <a className={`${footerStyles.footer__img}`} href="" ><img src={facebook} alt="Facebook Icon" /></a>
        <a className={`${footerStyles.footer__img}`} href="https://instagram.com/growbyspringload" ><img src={instagram} alt="Instagram Icon" /></a>
        <a className={`${footerStyles.footer__img}`} href="https://twitter.com/growspringload" ><img src={twitter} alt="Twitter Icon" /></a>
        <a className={`${footerStyles.footer__img}`} href="" ><img src={github} alt="GitHub Icon" /></a>
        <p>
          {" "}
          What? We're not at all alike!
          Some days you get the bear, and some days the bear gets you.{" "}
        </p>
      </div>
    </main>
    <div className={`${footerStyles.footer__copy}`}>
      {" "}
      &copy; {footerDescription}{" "}
    </div>
  </footer>
);
