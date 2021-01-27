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