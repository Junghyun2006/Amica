import React from 'react';
import ConversationIndexItem from '../conversation/conversations_index_item';

const ConversationIndex = ({conversations, currentUser}) => {

    const conversationIndex = Object.values(conversations).map((conversation, i) => {
        return <ConversationIndexItem conversation={conversation} currentUser={currentUser} key={i}/>
    })
    return (
        <div className='conversation-index'>
            {conversationIndex}
        </div>
    )
}

export default ConversationIndex;