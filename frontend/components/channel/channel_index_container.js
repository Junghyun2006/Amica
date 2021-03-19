import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import {requestServerChannels} from "../../actions/channel_actions"
import {withRouter} from "react-router";
import {requestServers} from "../../actions/server_actions"
import {openModal} from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        channels: Object.values(state.entities.channels),
        servers: state.entities.servers,
        channelsTwo: state.entities.channels,
        ownProps
    }
}

const mdp = dispatch => {
    return {
        requestServerChannels: (serverId) => dispatch(requestServerChannels(serverId)),
        requestServers: () => dispatch(requestServers()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}


export default withRouter(connect(msp, mdp)(ChannelIndex));