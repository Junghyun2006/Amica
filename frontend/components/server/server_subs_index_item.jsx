import React from 'react';

const ServerSubsIndexItem = ({sub}) => {
    return (
        <div className='server-sub-container'>
            <img src={sub.avatarUrl} className="member-icon" />
            <h1>{sub.username}</h1>
        </div>
    )
}

export default ServerSubsIndexItem;