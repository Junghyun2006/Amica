export const postUser = user => { //Creating User
    return $.ajax({
        url: 'api/users',
        method: 'POST', 
        data: { user }
    })
}

export const postSession = user => { //Log in 
    return $.ajax({
        url: 'api/session',
        method: 'POST',
        data: { user }
    })
}


export const deleteSession = () => { //Log out 
    return $.ajax({
        url: 'api/session',
        method: 'DELETE'
    })
};