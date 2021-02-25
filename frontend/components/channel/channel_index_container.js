import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import {requestServerChannels} from "../../actions/channel_actions"
import {withRouter} from "react-router";
import {requestServers} from "../../actions/server_actions"

const msp = (state, ownProps) => {
    return {
        channels: Object.values(state.entities.channels),
        servers: state.entities.servers,
        ownProps
    }
}

const mdp = dispatch => {
    return {
        requestServerChannels: (serverId) => dispatch(requestServerChannels(serverId)),
        requestServers: () => dispatch(requestServers())
    }
}


export default withRouter(connect(msp, mdp)(ChannelIndex));