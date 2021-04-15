import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {receiveConversationMessage, deleteConversation} from "../../actions/conversation_actions";
import { useHistory } from "react-router";

const ConversationIndexItem = ({ conversation, currentUser }) => {
    const {id, name} = conversation;
    const dmIcon = Object.values(conversation.subscriptions).filter(sub => {return sub.id !== currentUser.id})[0].avatarUrl
    const removedSpacesName = name.split(' ').join('');
    const conversationName = removedSpacesName.split(',').filter(name => {return name !== currentUser.username}).join(', ')
    const memberCount = Object.values(conversation.subscriptions).length;
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        App.cable.subscriptions.create(
            { channel: 'ConversationChannel', id: id },
            {
                received: (data) => {
                dispatch(receiveConversationMessage(data))
                },
            }
        )
    }, [conversation, dispatch])


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

    const handleDeleteSubscription = () => {

        dispatch(deleteConversation(conversation.id)).then(() => history.push('/@me'))
    }


  return (
      <Link to={`/@me/conversations/${id}`} style={{ textDecoration: "none" }}>
        <div className="conversation-item-container">
                {conversationIcon}
                <div className="conversation-item-name-cont">
                    <div className="conversation-item-name">{conversationName}</div>
                    {memberCountLabel}
                </div>
            <div classname="conv-icon-close-cont" onClick={() => handleDeleteSubscription()}><img className="conversation-icon-close" src={window.close}/></div>
        </div>
      </Link>
  );
};

export default ConversationIndexItem;
