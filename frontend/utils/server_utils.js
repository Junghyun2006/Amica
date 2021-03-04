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
export const createServer = (server) => {
  return $.ajax({
    method: "POST",
    url: "/api/servers",
    data: server,
    contentType: false,
    processData: false,
  }).then(
    (response) => console.log(response.message),
    (response) => console.log(response.responseJSON)
  );
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
