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
        className={` ${headerStyles.flex__item} ${headerStyles.header__title} ${
          headerStyles.header__img
        } ${headerStyles.flex__logo}`}
      >
        <p>
          <img src={icon} alt="icon" width="45px" height="25px;" />
          <span className={`${headerStyles.header__grow} `}>GROW &nbsp; </span>
          <a
            className={`${headerStyles.header__item}`}
            href="/home-css-modules"
          >
            Springload
          </a>
        </p>
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
        <a href="/join-css-modules">Join</a>
      </li>
    </ul>
  </nav>
);
