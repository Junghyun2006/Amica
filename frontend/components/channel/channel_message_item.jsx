import React from 'react';

const ChannelMessageItem = ({message}) => {
    return (
        <>  
            <h1>{message.username}</h1>
            <h1>{message.message_body}</h1>
        </>
    )
}

export default ChannelMessageItem;