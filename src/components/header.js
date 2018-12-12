import React from "react";
import headerStyles from "./header-css-modules.scss";

export default ({ children }) => (
  <div className={headerStyles.container}>
    {children}
    <nav className="home__navigation" >

      <ul className="nav flexItem flexStart">
        <li>
          <span className="grow">GROW </span>
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            Springload
          </a>
        </li>
      </ul>
      <div className="springload-logo" />
      <ul className="nav flexContainer flexEnd">
        <li>
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
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
  </div>

     //className={headerStyles.bluebackground}
  // <div className={`${headerStyles.header__navigation}`}>
  //     <div className={`${headerStyles.header__item}  ${headerStyles.flex__item} `}>
  //       <span className={`${headerStyles.header__grow}`}>GROW </span>
  //       <a
  //         className={`${headerStyles.header__item}  `}
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
);
