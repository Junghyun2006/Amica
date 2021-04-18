import React, { useState } from "react";
import { createConversation } from "../../actions/conversation_actions";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";


const FriendCtx = ({ dataSet, currentUser, conversations, setActive }) => {
  const history = useHistory();
  const dispatch = useDispatch();


  const ConversationExist = () => {
    for (let i = 0; i < Object.values(conversations).length; i++) {
      if (Object.values(conversations)[i].name === dataSet.username) {
        history.push(
          `/@me/conversations/${Object.values(conversations)[i].id}`
        );
        return false;
      }
    }
    return true;
  };

  const sendMessage = () => {
    if (ConversationExist()) {
      let name = currentUser.username
      name += ", " + dataSet.username
      const conversation = {
        name,
        users: [currentUser.id, dataSet.subid],
      };
      dispatch(createConversation(conversation, history));
    }
  };

  return (
    <>
        <div className="right-click-container">
        {currentUser.id == dataSet.subid ? (
            <div className="server-setting-option-inv" onClick={() => setActive()}>
                <div className="ss-text-invite">Setting</div>
            </div>
        ) : null}
        {currentUser.id != dataSet.subid ? (
            <div className="server-setting-option-inv" onClick={() => sendMessage()}>
                <div className="ss-text-invite" >
                    Message
                </div>
            </div>
        ) : null}
        </div>
    </>
  );
};

export default FriendCtx;
