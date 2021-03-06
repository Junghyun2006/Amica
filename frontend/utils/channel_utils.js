export const requestServerChannels = (serverId) => {
  return $.ajax({
    url: `/api/servers/${serverId}/channels`,
  });
};

export const requestChannel = (channelId) => {
  return $.ajax({
    url: `/api/channels/${channelId}`,
  });
};

export const createChannel = ({channel, push, handleActiveServer}) => {
  return $.ajax({
    url: `/api/channels`,
    method: "POST",
    data: {channel},
  }).then((response) => {
    push(`/servers/${channel.server_id}/${response.id}`);
    if (handleActiveServer !== undefined) handleActiveServer(channel.server_id);
  });
};

export const updateChannel = (channel) => {
  return $.ajax({
    url: `/api/channels/${channel.id}`,
    method: "PATCH",
    data: { channel },
  });
};

export const deleteChannel = (channelId) => {
  return $.ajax({
    url: `/api/channels/${channelId}`,
    method: "DELETE",
  });
};

export const requestChannelMessages = (channelId) => {
  const message = {messageable_type: 'Channel', messageable_id: channelId}
  return $.ajax({
      url: `/api/channels/${channelId}/messages`,
      data: {message}
  })
}