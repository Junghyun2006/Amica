import React from 'react';

const FriendIndexItem = ({friend}) => {
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
                    <div className='friend-item-setting-cont1'>
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