import { RECEIVE_CURRENT_USER, RECIEVE_SESSION_ERRORS, RESET_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_SESSION_ERRORS:
            return action.errors;            
        case RECEIVE_CURRENT_USER:
            return [];
        case RESET_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;