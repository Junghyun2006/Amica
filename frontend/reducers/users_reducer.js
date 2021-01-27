import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, state, action.users )
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        default:
            return state;
    }
}

export default UsersReducer;