import * as UserAPIUtil from "../utils/user_utils"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})


export const receiveCUser = userId => dispatch => UserAPIUtil.requestUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
   
export const receiveAllUsers = () => dispatch => UserAPIUtil.requestUsers()
    .then(users => dispatch(receiveUsers(users)))