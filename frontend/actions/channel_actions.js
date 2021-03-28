import * as ChannelAPIUtil from "../utils/channel_utils";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";

const receiveChannels = (channels) => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

const receiveChannel = (channel) => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

const removeChannel = (channelId) => {
    return {
        type: REMOVE_CHANNEL,
        channelId
    }
}

const receiveChannelMessages = (messages) => {
    return {
        type: RECEIVE_CHANNEL_MESSAGES,
        messages
    }
}

// THUNK

export const requestServerChannels = (serverId) => {
    return dispatch => {
        return ChannelAPIUtil.requestServerChannels(serverId).then(channels => {
            dispatch(receiveChannels(channels))
        })
    }
}

export const requestChannel = (channelId) => {
    return dispatch => {
        return ChannelAPIUtil.requestChannel(channelId).then(channel => {
            dispatch(receiveChannel(channel))
        })
    }
}


export const createChannel = (channel) => {
    return dispatch => {
        return ChannelAPIUtil.createChannel(channel).then(channel => {
            dispatch(receiveChannel(channel))
        })
    }
}

export const updateChannel = (channel) => {
    return dispatch => {
        return ChannelAPIUtil.updateChannel(channel).then(channel => {
            dispatch(receiveChannel(channel))
        })
    }
}

export const deleteChannel = (channelId) => {
    return dispatch => {
        return ChannelAPIUtil.deleteChannel(channelId).then(channel => {
            dispatch(removeChannel(channel.id))
        })
    }
}

export const requestChannelMessages = (channelId) => {
    return dispatch => {
        return ChannelAPIUtil.requestChannelMessages(channelId).then(messages => {
            dispatch(receiveChannelMessages(messages))
        })
    }
}

