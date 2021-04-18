import React from 'react';
import FriendIndexItem from '../friend/friend_index_item';

const FriendsIndex = ({friends, conversations, currentUser}) => {

    const friendsList = Object.values(friends).map((friend, i) => {
        return (
            <FriendIndexItem friend={friend} key={i} conversations={conversations} currentUser={currentUser}/>
        )
    })

    const friendCount = Object.values(friends).length

    return (
        <div>
            <div className="friend-box">
                <div className="friends-list-container">
                    <div className="all-friends-label">ALL FRIENDS&nbsp;—&nbsp;{friendCount}</div>
                    {friendsList}
                </div>
            </div>
        </div>
    )
}

export default FriendsIndex