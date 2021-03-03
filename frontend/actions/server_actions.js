import * as ServerAPIUtil from "./../utils/server_utils";
import * as SubAPIUtil from "../utils/sub_utils";

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";

const receiveServers = (servers) => {
    return {
        type: RECEIVE_SERVERS,
        servers
    }
}

const receiveServer = (server) => {
    return {
        type: RECEIVE_SERVER,
        server
    }
}

const removeServer = (serverId) => {
    return {
        type: REMOVE_SERVER,
        serverId
    }
}

// THUNK

export const requestServers = () => {
    return dispatch => {
        return ServerAPIUtil.requestServers().then(servers => {
            dispatch(receiveServers(servers))
        })
    }
}

export const requestServer = (serverId) => {
    return dispatch => {
        return ServerAPIUtil.requestServer(serverId).then(server => {
            dispatch(receiveServer(server))
        })
    }
}


export const createServer = (server) => {
    return dispatch => {
        return ServerAPIUtil.createServer(server).then(server => {
            dispatch(receiveServer(server))
        }) 
    } 
}

  

export const updateServer = (server) => {
    return dispatch => {
        return ServerAPIUtil.updateServer(server).then(server => {
            dispatch(receiveServer(server))
        })
    }
}

export const deleteServer = (serverId) => {
    return dispatch => {
        return ServerAPIUtil.deleteServer(serverId).then(server => {
            dispatch(removeServer(server.id))
        })
    }
}

