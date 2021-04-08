export const requestFriends = () => $.ajax({url: "/api/friends"});

export const requestFriend = (friendId) =>  $.ajax({url: `/api/friends/${friendId}`});

export const createFriendship = (friendId) => $.ajax({method: "POST", url: '/api/friends', data: friendId});

export const deleteFriendship = (friendId) => $.ajax({method: "DELETE", url: `/api/friends/${friendId}`});