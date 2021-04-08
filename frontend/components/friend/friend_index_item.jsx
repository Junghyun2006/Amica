import React from 'react';

const FriendIndexItem = ({friend}) => {
    return (
        <div className="friend-item-container">
            <div>{friend.username}</div>
            <div>{friend.id}</div>
        </div>
    )
}

export default FriendIndexItem;