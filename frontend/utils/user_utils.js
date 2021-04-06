import {receiveUserErrors} from "../actions/user_action";

export const requestUsers = () => {
    return $.ajax({
        url: '/api/users'
    })
}

export const requestUser = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`
    })
}

export const updateUser = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: "PATCH",
        data: { user }
  })
}