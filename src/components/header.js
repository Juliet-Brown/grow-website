import React from "react";
import headerStyles from "./header.module.scss";
import icon from "../../static/springload_icon.svg";

export default () => (
  // <div className={headerStyles.container}>

    <nav className={`${headerStyles.header__navigation}`}>

      <div
        className={`${headerStyles.header__item}  ${headerStyles.flex__item} `}
      >
        <img src={icon} alt="icon" />
        <span className={`${headerStyles.header__grow}`}>GROW </span>
        <a
          className={`${headerStyles.header__item}`}
          href="/home-css-modules"
        >
          Springload
        </a>
      </div>
      <div className={headerStyles.logo} />
      <ul
        className={`${headerStyles.header__list} ${
          headerStyles.flex__container
        } ${headerStyles.flexEnd}`}
      >
        <li>
          <a href="/home-css-modules">
            Home
          </a>
        </li>
        <li>
          <a href="/about-css-modules">About</a>
        </li>
        <li>
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  // </div>

  // <div className={headerStyles.bluebackground} >
  // <div className={`${headerStyles.header__navigation}`}>
  //     <div className={`${headerStyles.header__item}  ${headerStyles.flex__item} `}>
  //       <span className={`${headerStyles.header__grow}`}>GROW </span>
  //       <a
  //         className={`${headerStyles.header__item}`}
  //         href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"
  //       >
  //         Springload
  //       </a>
  //     </div>
  //     <div className={headerStyles.logo} />
  //     <ul
  //       className={`${headerStyles.header__list} ${headerStyles.flex__container} ${
  //         headerStyles.flexEnd
  //       }`}
  //     >
  //       <li>
  //         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
  //           Home
  //         </a>
  //       </li>
  //       <li>
  //         <a href="/about-css-modules">About</a>
  //       </li>
  //       <li>
  //         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
  //           Contact
  //         </a>
  //       </li>
  //       <li>
  //         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
  //           Join
  //         </a>
  //       </li>
  //     </ul>
  //   </div>

// <div className={headerStyles.container}>
//   {children}
//   <nav className="home__navigation">
//     <ul className="nav flexItem flexStart">
//       <li>
//         <img src={icon} alt="icon" />
//
//         <span className="grow">GROW </span>
//         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
//           Springload
//         </a>
//       </li>
//     </ul>
//     <div className="springload-logo" />
//     <ul className="nav flexContainer flexEnd">
//       <li>
//         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
//           Home
//         </a>
//       </li>
//       <li>
//         <a href="/about-css-modules">About</a>
//       </li>
//       <li>
//         <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
//           Contact
//         </a>
//       </li>
//     </ul>
//   </nav>
// </div>

);
