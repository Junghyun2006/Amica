import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "./nav_bar_container";

class Splash extends React.Component {
  render() {
    return (
      <div>
        <div
          className="header-container"
          style={{ backgroundImage: `url(${window.discordHeader})` }}
        >
          <div className="content-container-col">
            <div className="navbar-container">
              <ul className="nav-links">
                <li>
                  <a
                    href="https://www.linkedin.com/in/jung-park-817580141/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Junghyun2006" target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://angel.co/u/jung-park-14" target="_blank">
                    Angel
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Portfolio
                  </a>
                </li>
              </ul>
              <NavBarContainer />
            </div>
            <div className="info-container-1">
              <div className="splash-head-blurb">
                <h1 className="splash-head">Your place to talk</h1>
                <p className="splash-head-p">
                  Whether you’re part of a school club, gaming group, worldwide
                  art community, or just a handful of friends that want to spend
                  time together, Amica makes it easy to talk every day and hang
                  out more often.
                </p>
              </div>
              <div className="splash-head-btn">
                <Link to={"/"} className="splash-head-btn-1">
                  Download for Mac
                </Link>
                <Link to={"/login"} className="splash-head-btn-2">
                  Open Amica in your browser
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="info-container-2">
          <div className="content-container-row">
            <div className="content-image-1"></div>
            <div className="content-blurb-1">
              <h1>An invite-only place with plenty of room to talk</h1>
              <p>
                Amica servers are organized into topic-based channels where you
                can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </p>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="info-container-2">
          <div className="content-container-row">
            <div className="content-blurb-1">
              <h1>Where hanging out is easy</h1>
              <p>
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </p>
            </div>
            <div className="content-image-1a"></div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="info-container-2">
          <div className="content-container-row">
            <div className="content-image-1b"></div>
            <div className="content-blurb-1">
              <h1>From a few to a fandom</h1>
              <p>
                Get a community of any size running with moderation tools and
                custom member access. Give members special powers, set up
                private channels, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="info-container-3">
          <div className="content-container-col-2">
            <div className="content-blurb-2">
              <h1>Reliable tech for staying close</h1>
              <p>
                Low-latency voice and video feels like you’re in the same room.
                Wave hello over video, watch friends stream their games, or
                gather up and have a drawing session with screen share.
              </p>
            </div>
            <div className="content-image-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
