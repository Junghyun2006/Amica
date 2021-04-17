import React from 'react';

const ServerSubsIndexItem = ({sub}) => {
    return (
        <div className='server-sub-container' data-subid={sub.id} data-username={sub.username} data-ctxtype="friend">
            <img src={sub.avatarUrl} className="member-icon" data-subid={sub.id} data-username={sub.username} data-ctxtype="friend"/>
            <h1 data-subid={sub.id} data-username={sub.username} data-ctxtype="friend">{sub.username}</h1>
        </div>
    )
}

export default ServerSubsIndexItem;