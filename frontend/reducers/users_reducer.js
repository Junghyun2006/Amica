import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from '../actions/user_action';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, state, action.users )
        // case RECEIVE_CURRENT_USER:
        //     return Object.assign({}, state, action.user )
        default:
            return state;
    }
}

export default UsersReducer;