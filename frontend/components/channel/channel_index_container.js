import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import {requestServerChannels} from "../../actions/channel_actions"
import { logout } from '../../actions/session_actions';
import {withRouter} from "react-router";
import {requestServers} from "../../actions/server_actions"
import {openModal} from '../../actions/modal_actions';
import {receiveCUser} from '../../actions/user_action';

const msp = (state, ownProps) => {
    return {
        channels: Object.values(state.entities.channels),
        servers: state.entities.servers,
        channelsTwo: state.entities.channels,
        currentUser: state.session.currentUser,
        ownProps
    }
}

const mdp = dispatch => {
    return {
        requestServerChannels: (serverId) => dispatch(requestServerChannels(serverId)),
        requestServers: () => dispatch(requestServers()),
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout()),
        receiveCurrentUser: userId => dispatch(receiveCUser(userId))

    }
}


export default withRouter(connect(msp, mdp)(ChannelIndex));