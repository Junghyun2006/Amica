import { createSubscription } from "./sub_utils";
import {createChannel} from "./channel_utils";

export const requestServers = () => {
  return $.ajax({
    url: "/api/servers",
  });
};

export const requestServer = (serverId) => {
  return $.ajax({
    url: `/api/servers/${serverId}`,
  });
};
export const createServer = ({ serverFormData, push, handleActiveServer }) => {
  return $.ajax({
    method: "POST",
    url: "/api/servers",
    data: serverFormData,
    contentType: false,
    processData: false,
  }).then((response) => {
    createSubscription({
      subscribeable_id: response.id,
      subscribeable_type: "Server",
    });
    createChannel({
      name: 'general',
      server_id: response.id
    }).then((channel_response) => {
      push(`/servers/${response.id}/${channel_response.id}`);
      handleActiveServer(response.id);
    })
  });
};
export const updateServer = (server) => {
  return $.ajax({
    url: `/api/servers/${server.id}`,
    method: "PATCH",
    data: { server },
  });
};
export const deleteServer = (serverId) => {
  return $.ajax({
    url: `/api/servers/${serverId}`,
    method: "DELETE",
  });
};
