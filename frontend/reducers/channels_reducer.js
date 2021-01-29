import {RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL} from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNELS:  
            return Object.assign({}, state, action.channels);
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, action.channel);
        case REMOVE_CHANNEL:
            const newState = {...state};
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default channelsReducer;