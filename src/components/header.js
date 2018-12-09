import React from "react";
import headerStyles from "./header-css-modules.scss";

export default ({ children }) => (
  <div className={headerStyles.container}>
    {children}
    <nav className="home__navigation" className={headerStyles.bluebackground}>
      <ul className="nav flexItem flexStart">
        <li>
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
);
