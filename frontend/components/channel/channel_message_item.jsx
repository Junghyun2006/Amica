import React from 'react';

const ChannelMessageItem = ({message}) => {
    debugger
    return (
        <>  
            <img src={message.user.avatarUrl} className="avatar-icon" />
            <h1>{message.user.username}</h1>
            <h1>{Object.values(message.message)[0].message_body}</h1>
        </>
    )
}

export default ChannelMessageItem;