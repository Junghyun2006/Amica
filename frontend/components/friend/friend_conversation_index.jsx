import React, { useEffect, useState, useRef } from "react";
import { useLocation, useHistory } from "react-router"
import UserSetting from "../user/user_setting";
import ConversationIndex from "../conversation/conversations_index";
import ConversationCreate from "../friend/conversationCreate";

const FriendConversationIndex = ({
  currentUser,
  logout,
  push,
  openModal,
  friends,
  conversations,
}) => {
  const location = useLocation();
  const history = useHistory();
  const [conversationCreate, setConversationCreate] = useState(false);
  const conversationCreateToggle = () => setConversationCreate(!conversationCreate);
  const convCreate = conversationCreate ? (
    <ConversationCreate
      currentUser={currentUser}
      friends={friends}
      conversationCreateToggle={conversationCreateToggle}
      conversations={conversations}
    />
  ) : null;

  const home = (!location.pathname.includes('conversations')) ? "home" : null;
  const homeIcon = (!location.pathname.includes('conversations')) ? "homeIcon" : null;

  return (
    <>
      <div className="friend-index-container">
        <div className="friend-search-container">
          <button className="friend-search-btn">
            Find or start a conversation
          </button>
        </div>
        <div className="friend-index-holder" >
          <div className="friends-btn-container" onClick={() => history.push('/@me')}>
            <button className={`friends-btn ${home}`}>
              <img className={`friend-icon ${homeIcon}`} src={window.friend_icon} />
              <h1 className="friends-btn-text">Friends</h1>
            </button>
          </div>
          <div className="text-channel-container">
            <div className="friend-text-channel">DIRECT MESSAGES</div>
            <div
              className="channel-settings"
              onClick={() => conversationCreateToggle()}
            >
              <svg
                className="friend-text-channel-plus"
                aria-hidden="false"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <polygon
                  fill="currentColor"
                  points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                ></polygon>
              </svg>
            </div>
          </div>
          <ConversationIndex
            conversations={conversations}
            currentUser={currentUser}
          />
        </div>
        <UserSetting
          currentUser={currentUser}
          logout={logout}
          push={push}
          openModal={openModal}
        />
      </div>
      {convCreate}
    </>
  );
};

export default FriendConversationIndex;
