import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNELS:  
            return action.channels
        case RECEIVE_CHANNEL:
            const channelId = action.channel.id
            const channel = {[channelId]:action.channel}
            return Object.assign({}, state, channel);
        case REMOVE_CHANNEL:
            const newState = {...state};
            delete newState[action.channelId];
            return newState;
        default:
            return state;
    }
}

export default channelsReducer;