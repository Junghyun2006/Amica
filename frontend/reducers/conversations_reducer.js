import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION, REMOVE_CONVERSATION } from "../actions/conversation_actions";
import { RECEIVE_CURRENT_USER } from "../actions/user_action";

const conversationsReducer = (state  = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CONVERSATIONS:
            return action.conversations
        case RECEIVE_CONVERSATION:
            return Object.assign({}, state, action.conversation)
        case REMOVE_CONVERSATION:
            const newState = {...state};
            delete newState[action.conversation.id] // check
            return newState
        case RECEIVE_CURRENT_USER:
            if (!action.user.servers) {
                return {};
            } else {
                return action.user.conversations;
            }
        default:
            return state;
    }
}

export default conversationsReducer;