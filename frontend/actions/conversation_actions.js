import * as ConversationAPIUtil from "./../utils/conversation_utils";

export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CONVERSATION = "REMOVE_CONVERSATION";

const receiveConversations = (conversations) => {
    return {
        type: RECEIVE_CONVERSATIONS,
        conversations
    }
}

const receiveConversation = (conversation) => {
    return {
        type: REMOVE_CONVERSATION,
        conversation
    }
}

const removeConversation = (conversationId) => {
    return {
        type: REMOVE_CONVERSATION,
        conversationId
    }
}

// THUNK

export const requestConversations = () => {
    return disaptch => {
        return ConversationAPIUtil.requestConversations().then(conversations => {
            dispatch(receiveConversations(conversations))
        })
    }
}

export const requestConversation = (conversationId) => {
    return dispatch => {
        return ConversationAPIUtil.requestConversation(conversationId).then(conversation => {
            dispatch(receiveConversation(conversation))
        })
    }
}

export const createConversation = (conversation) => {
    return dispatch => {
        return ConversationAPIUtil.createConversation(conversation).then(conversation => {
            dispatch(receiveConversation(conversation))
        })
    }
}

export const deleteConversation = (conversationId) => {
    return dispatch => {
        return ConversationAPIUtil.deleteConversation(conversationId).then(conversation => {
            dispatch(removeConversation(conversation.id))
        })
    }
}