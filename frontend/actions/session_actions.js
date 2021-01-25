import {
    postUser,
    postSession,
    deleteSession
} from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECIEVE_SESSION_ERRORS = "RECIEVE_SESSION_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = errors => ({
    type: RECIEVE_SESSION_ERRORS,
    errors
})

const resetErrors = () => ({
    type: RESET_ERRORS
})

export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)));

export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)));
export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));

export const reset = () => dispatch => (
    dispatch(resetErrors())
)