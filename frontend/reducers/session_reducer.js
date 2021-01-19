import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullSession = {
    currentUser: null,
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.user}); 
            //old state is not needed, if a currentUser is returned that should be the currentUser
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default sessionReducer