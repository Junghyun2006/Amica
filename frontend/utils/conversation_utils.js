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

export const createConversation = (conversation) => {
    return $.ajax({
        method: "POST",
        url: "api/conversations",
        data: {conversation}
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