import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import {requestServerChannels} from "../../actions/channel_actions"
import {withRouter} from "react-router";

const msp = (state, ownProps) => {
    return {
        channels: Object.values(state.entities.channels),
        ownProps
    }
}

const mdp = dispatch => {
    return {
        requestServerChannels: (serverId) => dispatch(requestServerChannels(serverId)),
    }
}


export default withRouter(connect(msp, mdp)(ChannelIndex));