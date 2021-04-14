import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION, REMOVE_CONVERSATION } from "../actions/conversation_actions";
import { RECEIVE_CURRENT_USER } from "../actions/user_action";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const conversationsReducer = (state  = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CONVERSATIONS:
            return action.conversations
        case RECEIVE_CONVERSATION:
            return Object.assign({}, state, action.conversation)
        case REMOVE_CONVERSATION:
            const newState = {...state};
            const conversationId = Object.keys(action.conversation)[0]
            delete newState[conversationId] // check
            return newState
        case RECEIVE_CURRENT_USER:
            if (!action.user.conversations) {
                return state;
            } else {
                return action.user.conversations;
            }
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default conversationsReducer;