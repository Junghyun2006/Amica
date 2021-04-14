

export const requestConversations = () => {
  return $.ajax({
    url: "/api/conversations",
  });
};

export const requestConversation = (conversationId) => {
  return $.ajax({
    url: `/api/conversations/${conversationId}`,
  });
};

export const createConversation = (conversation, history) => {
    return $.ajax({
        method: "POST",
        url: "api/conversations",
        data: {conversation}
    }).then(response => {
      history.push(`/@me/conversations/${Object.keys(response)[0]}`)
      return response;
    })
}

export const deleteConversation = (conversationId) => {
    return $.ajax({
        url: `/api/conversations/${conversationId}`,
        method: "DELETE"
    })
}

export const requestConversationMessages = (conversationId) => {
  const message = {messageable_type: 'Conversation', messageable_id: conversationId}
  return $.ajax({
      url: `/api/conversations/${conversationId}/messages`,
      data: {message}
  })
}