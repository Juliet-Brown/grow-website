import React from "react";
import Header from "../components/header";

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h1>Richard Hamming on Luck</h1>
    <Header />
    <div>
      <p>
        From Richard Hamming’s classic and must-read talk, “
        <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>
        ”.
      </p>
      <blockquote>
        <p>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
          </em>
        </p>
      </blockquote>
    </div>
    <p>Posted April 09, 2011</p>

    <div className="home__container flexContainer flexColumn fullHeight whiteBackground">
      <nav className="home__navigation blueBackground">
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

      <div className="flexContainer flexItem">
        <main className="flexItem whiteBackground main">
          <p>
            What? We're not at all alike! Some days you get the bear, and some
            days the bear gets you. Maybe if we felt any human loss as keenly as
            we feel one of those close to us, human history would be far less
            bloody. Yesterday I did not know how to eat gagh. I'd like to think
            that I haven't changed those things, sir. Computer, belay that
            order. Travel time to the nearest starbase? Maybe if we felt any
            human loss as keenly as we feel one of those close to us, human
            history would be far less bloody. That might've been one of the
            shortest assignments in the history of Starfleet. The Federation's
            gone; the Borg is everywhere! I'm afraid I still don't understand,
            sir. I suggest you drop it, Mr. Data. We finished our first sensor
            sweep of the neutral zone. Shields up! Rrrrred alert! Well, I'll say
            this for him - he's sure of himself.
          </p>
          <p>
            Is it my imagination, or have tempers become a little frayed on the
            ship lately? You enjoyed that. Talk about going nowhere fast. They
            were just sucked into space. I am your worst nightmare! Now, how the
            hell do we defeat an enemy that knows us better than we know
            ourselves? The look in your eyes, I recognize it. You used to have
            it for me. Sorry, Data. When has justice ever been as simple as a
            rule book? I will obey your orders. I will serve this ship as First
            Officer. And in an attack against the Enterprise, I will die with
            this crew. But I will not break my oath of loyalty to Starfleet.
            Sure. You'd be surprised how far a hug goes with Geordi, or Worf.
            Not if I weaken first. Wouldn't that bring about chaos? Fear is the
            true enemy, the only enemy. When has justice ever been as simple as
            a rule book? Ensign Babyface! Then maybe you should consider this:
            if anything happens to them, Starfleet is going to want a full
            investigation.
          </p>
        </main>
        <aside className="sidebar sidebarLeft">
          <h2>Left Sidebar</h2>
          <p>Put your content here</p>
        </aside>
        <aside className="sidebar sidebarRight">
          <h2>Right Sidebar</h2>
          <p>Put your content here</p>
        </aside>
      </div>
    </div>
  </div>
);
