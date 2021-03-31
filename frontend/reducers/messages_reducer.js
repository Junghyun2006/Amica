import {RECEIVE_CHANNEL_MESSAGE, RECEIVE_CHANNEL_MESSAGES} from "../actions/channel_actions";

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNEL_MESSAGES:  
            return action.messages
        case RECEIVE_CHANNEL_MESSAGE:
            return Object.assign({}, state, action.message)
        default:
            return state;
    }
};

export default messagesReducer;