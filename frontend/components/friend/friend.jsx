import React from "react";
import FriendsIndex from './friend_index';

const Friend = ({friends}) => {
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
          </div>
          <div className="friend-container">
            <FriendsIndex friends={friends}/>
          </div>
        </div>
    )
}

export default Friend;