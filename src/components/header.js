import React from "react";
import headerStyles from "./header.module.scss";
import icon from "../../static/springload_icon.svg";

export default () => (

  <nav className={`${headerStyles.header__navigation}`}>
    <div
      className={`${headerStyles.header__item}  ${headerStyles.flex__item} ${
        headerStyles.flex__container
      } `}
    >
      <div
        className={`${headerStyles.header__img}  ${headerStyles.flex__item} ${
          headerStyles.flex__logo
        } `}
      >
        <img src={icon} alt="icon" />
      </div>
      <div className={` ${headerStyles.flex__item} `}>
        <span className={`${headerStyles.header__grow} `}>GROW &nbsp; </span>
        <a className={`${headerStyles.header__item}`} href="/home-css-modules">
          Springload
        </a>
      </div>
    </div>
    <ul
      className={`${headerStyles.header__list} ${headerStyles.flex__list} ${
        headerStyles.flex__container
      } ${headerStyles.flex__item}`}
    >
      <li>
        <a href="/home-css-modules">Home</a>
      </li>
      <li>
        <a href="/about-css-modules">About</a>
      </li>
      <li>
        <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          Join
        </a>
      </li>
    </ul>
  </nav>
);
