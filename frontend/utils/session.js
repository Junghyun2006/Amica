export const postUser = user => { //Creating User
    $.ajax({
        url: 'api/users',
        method: 'POST', 
        data: { user }
    })
}

export const postSession = user => { //Log in 
    $.ajax({
        url: 'api/session',
        method: 'POST',
        data: { user }
    })
}


export const deleteSession = () => { //Log out 
    $.ajax({
        url: 'api/session',
        method: 'DELETE'
    })
};