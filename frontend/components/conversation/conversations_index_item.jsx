import React from "react";
import { Link } from "react-router-dom";

const ConversationIndexItem = ({ conversation, currentUser }) => {
  
    const dmIcon = Object.values(conversation.subscriptions).filter(sub => {return sub.id !== currentUser.id})[0].avatarUrl
    const removedSpacesName = conversation.name.split(' ').join('');
    const conversationName = removedSpacesName.split(',').filter(name => {return name !== currentUser.username}).join(', ')
    const memberCount = Object.values(conversation.subscriptions).length;

    const conversationIcon =
    memberCount > 2 ? (
        <div className="conversation-member-icon">
            <div className="conversation-member-icon-holder">
            <div className="conversation-member-icon-circle"></div>
            <img className="conversation-member-icon-img" src={window.mh_member} />
            </div>
        </div>
    ) : <div className="conversation-member-icon">
        <img className="friend-avatar-icon" src={dmIcon} />
        </div>;

    const memberCountLabel =
    memberCount > 2 ? (
        <h1 className="conversation-member-count">{memberCount}&nbsp;&nbsp;Members</h1>
    ) : null;


  return (
      <Link to={`/@me/conversations/${conversation.id}`} style={{ textDecoration: "none" }}>
        <div className="conversation-item-container">
            {conversationIcon}
            <div className="conversation-item-name-cont">
                <div className="conversation-item-name">{conversationName}</div>
                {memberCountLabel}
            </div>
        </div>
      </Link>
  );
};

export default ConversationIndexItem;
