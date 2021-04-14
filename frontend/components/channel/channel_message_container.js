import { connect } from "react-redux";
import ChannelMessage from "./channel_message";
import {withRouter} from "react-router";
import {openModal} from '../../actions/modal_actions';
import {requestServerChannels} from "../../actions/channel_actions";
import {requestServers} from "../../actions/server_actions";
import {requestChannelMessages} from "../../actions/channel_actions";
import {requestConversationMessages, requestConversations } from "../../actions/conversation_actions";
import {receiveCUser} from "../../actions/user_action";

const msp = (state, ownProps) => {
    return {
        channels: state.entities.channels,
        channelMessages: Object.values(state.entities.messages),
        servers: state.entities.servers,
        currentUser: state.session.currentUser,
        conversations: state.entities.conversations
    }
}

const mdp = dispatch => {
    return {
        requestServerChannels: (serverId) => dispatch(requestServerChannels(serverId)),
        requestServers: () => dispatch(requestServers()),
        requestChannelMessages: (channelId) => dispatch(requestChannelMessages(channelId)),
        requestConversationMessages: (conversationId) => dispatch(requestConversationMessages(conversationId)),
        requestConversations: () => dispatch(requestConversations()),
        requestCurrentUser: (userId) => dispatch(receiveCUser(userId))
    }
}


export default withRouter(connect(msp, mdp)(ChannelMessage));