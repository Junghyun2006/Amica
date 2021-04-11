import React from "react";
import { Link } from "react-router-dom";
import ServerBarContainer from "../server/server_bar_container";
import FriendConversation from '../friend/friend_conversation_index';
import FriendsIndex from '../friend/friend_index';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_server: null,
      activeChannels: null
    };
  }

  componentDidMount() {
    this.props.requestFriends()
  }

  render() {
    const {currentUser, logout, openModal, friends} = this.props;
    const push = this.props.history.push;

    if (!friends) return null;

    return (
      <div className="home-wrapper">
        <ServerBarContainer />
        <FriendConversation currentUser={currentUser} logout={logout} push={push} openModal={openModal} friends={friends} />
        <div className="friend-main-container">
          <div className="friend-header">
            <div className="friend-label-container">
              <img className="friend-header-icon" src={window.friend_icon}></img>
              <h1 className="friend-label-name">Friends</h1>
            </div>
            <div className="vertical-separator"></div>
            <button className="friend-header-btn">Online</button>
            <button className="friend-header-btn">All</button>
            <button className="friend-header-btn">Pending</button>
            <button className="friend-header-btn">Blocked</button>
            <button className="add-friend-header-btn">Add Friend</button>
          </div>
          <div className="friend-container">
            <FriendsIndex friends={friends}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
