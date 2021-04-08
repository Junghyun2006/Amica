import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from "../actions/friend_actions";

const friendsReducer = (state= {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIENDS:
            return action.friends
        case RECEIVE_FRIEND:
            return Object.assign({}, state, action.friend)
        case REMOVE_FRIEND:
            const newState = {...state};
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default friendsReducer;