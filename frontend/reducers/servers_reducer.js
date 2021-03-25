import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CURRENT_USER } from "../actions/user_action";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVERS:
            return Object.assign({}, state, action.servers);
        case RECEIVE_SERVER:
            return Object.assign({}, state, action.server);
        case RECEIVE_CURRENT_USER:
            debugger
            // return Object.assign({}, state, action.user.servers)
            if (!action.user.servers) {
                return {};
            } else {
                return action.user.servers;
            }
        case REMOVE_SERVER:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default serversReducer;