import React from "react";
import { createConversation } from "../../actions/conversation_actions";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const FriendCtx = ({dataSet, currentUser, conversations}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    
    const ConversationExist = () => {
        for (let i = 0; i < Object.values(conversations).length; i++) {
            if (Object.values(conversations)[i].name === dataSet.username) {
                history.push(`/@me/conversations/${Object.values(conversations)[i].id}`);
                return false
            }
        }
        return true
    }
    
    const sendMessage = () => {
        if (ConversationExist()) {
            const conversation = {name: dataSet.username, users: [currentUser.id, dataSet.subid] }
            dispatch(createConversation(conversation, history))
        } 
    }
    
    return (
        <div className="right-click-container">
                {(currentUser.id != dataSet.subid) ? (<div onClick={() => sendMessage()}>Message</div> ) : null}
                <div>Add Friend</div>
                <div>Remove Friend</div>
        </div>
    )
}

export default FriendCtx;