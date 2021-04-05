import React from "react";
import { Link } from "react-router-dom";
import ServerBarContainer from "../server/server_bar_container";
import FriendIndex from '../friend/friend_index';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_server: null,
      activeChannels: null
    };
  }

  render() {
    const {currentUser, logout, openModal} = this.props;
    const push = this.props.history.push;

    return (
      <div className="home-wrapper">
        <ServerBarContainer />
        <FriendIndex currentUser={currentUser} logout={logout} push={push} openModal={openModal} />
        <div className="channel-container">
          <div className="friend-header"></div>
          <div className="friend-container">
            <div className="friend-box"></div>
            <div className="friend-status"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
