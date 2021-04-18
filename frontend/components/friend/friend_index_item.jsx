import React from 'react';
import { createConversation } from "../../actions/conversation_actions";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const FriendIndexItem = ({friend, conversations, currentUser}) => {

    const history = useHistory();
    const dispatch = useDispatch();


    const ConversationExist = () => {
        for (let i = 0; i < Object.values(conversations).length; i++) {
        if (Object.values(conversations)[i].name === friend.username) {
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
        const conversation = {
            name: friend.username,
            users: [currentUser.id, friend.id],
        };
        dispatch(createConversation(conversation, history));
        }
    };

    return (
        <> 
            <div className='friend-item-border'></div>
            <div className="friend-item-container">
                <div className="friend-item-left">
                    <img src={friend.avatarUrl} className="friend-avatar-icon" />
                    <div className='friend-info'>
                        <div className='friend-info-username'>{friend.username}</div>
                        <h1 className="friend-item-status">Offline</h1>
                    </div>
                </div>
                <div className='friend-item-right'>
                    <div className='friend-item-setting-cont1' onClick={() => sendMessage()}>
                        <img className='friend-item-setting-icon' src={window.message_icon} />
                        <div className='friend-item-circle'></div>
                    </div>
                    <div className='friend-item-setting-cont2'>
                        <img className='friend-item-setting-icon' src={window.three_dot} />
                        <div className='friend-item-circle'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FriendIndexItem;