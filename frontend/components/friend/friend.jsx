import React from "react";
import FriendsIndex from "./friend_index";

const Friend = ({ friends, conversations, currentUser }) => {
  return (
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
        <div className="profile">
          <div className="profile-icon-container">
            <a
              href="https://www.linkedin.com/in/jung-park-817580141/"
              target="_blank"
            >
              <img className="linkedin" src={window.linkedin} />
            </a>
          </div>
          <div className="profile-icon-container">
            <a href="https://github.com/Junghyun2006" target="_blank">
              <img className="github" src={window.github} />
            </a>
          </div>
          <div className="profile-icon-container">
            <a href="https://angel.co/u/jung-park-14" target="_blank">
              <img className="angel" src={window.angel} />
            </a>
          </div>
        </div>
      </div>
      <div className="friend-container">
        <FriendsIndex friends={friends} conversations={conversations} currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Friend;
