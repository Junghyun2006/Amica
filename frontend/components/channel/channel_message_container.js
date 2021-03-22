import { connect } from "react-redux";
import ChannelMessage from "./channel_message";
import {withRouter} from "react-router";
import {openModal} from '../../actions/modal_actions';
import {requestServerChannels} from "../../actions/channel_actions"
import {requestServers} from "../../actions/server_actions"

const msp = (state, ownProps) => {
    return {
        channels: state.entities.channels
    }
}

const mdp = dispatch => {
    return {
        requestServerChannels: (serverId) => dispatch(requestServerChannels(serverId)),
        requestServers: () => dispatch(requestServers()),
    }
}


export default withRouter(connect(msp, mdp)(ChannelMessage));