import { connect } from "react-redux";
import ServerBar from "./server_bar";
import {receiveCUser} from "../../actions/user_action";
import {openModal} from '../../actions/modal_actions';
import {createServer} from '../../actions/server_actions'
import {withRouter} from "react-router";

const msp = (state,ownProps) => {
    // debugger
    return {
        currentUser: state.session.currentUser,
        servers: Object.values(state.entities.servers),
        newServerInfo: {
            host_id: state.session.currentUser.id,
            name: `${state.session.currentUser.username}'s server`,
            activeServer: null
        },
        ownProps
    }    
}

const mdp = dispatch => {
    return {
        receiveCurrentUser: (userId) => dispatch(receiveCUser(userId)),
        openModal: (modal) => dispatch(openModal(modal)),
        createServer: (server) => dispatch(createServer(server))
    }
}


export default withRouter(connect(msp, mdp)(ServerBar));