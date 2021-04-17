import React from "react";
import { createConversation } from "../../actions/conversation_actions";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const FriendCtx = ({dataSet, currentUser}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sendMessage = () => {
        const conversation = {name: dataSet.username, users: [currentUser.id, dataSet.subid] }
        dispatch(createConversation(conversation, history))
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