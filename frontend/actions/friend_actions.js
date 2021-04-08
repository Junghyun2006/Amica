import * as FriendAPIUtil from '../utils/friend_utils';

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

const receiveFriends = (friends) => {
    return {
        type: RECEIVE_FRIENDS, 
        friends
    }
}

const receiveFriend = (friend) => {
    return {
        type: RECEIVE_FRIEND,
        friend
    }
}

const removeFriend = (friendId) => {
    return {
        type: REMOVE_FRIEND,
        friendId
    }
}

export const requestFriends = () => {
    return dispatch => {
        return FriendAPIUtil.requestFriends().then(friends => {
            dispatch(receiveFriends(friends))
        })
    }
}

export const requestFriend = (friend) => {
    return dispatch => {
        return FriendAPIUtil.requestFriend(friend.id).then(friend => {
            dispatch(receiveFriend(friend))
        })
    }
}

export const createFriendship = (friend) => {
    return dispatch => {
        return FriendAPIUtil.createFriendship(friend.id).then(friend => {
            dispatch(receiveFriend(friend))
        })
    }
}

export const deleteFriendship = (friendId) => {
    return dispatch => {
        return FriendAPIUtil.deleteFriendship(friendId).then(friend => {
            dispatch(removeFriend(friend.id))
        })
    }
}