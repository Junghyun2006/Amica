import { connect } from "react-redux";
import ServerBar from "./server_bar";
import {receiveCUser} from "../../actions/user_action";
import {openModal} from '../../actions/modal_actions';

const msp = (state,ownProps) => {
    // debugger
    return {
        currentUser: state.session.currentUser,
        servers: Object.values(state.entities.servers)
    }    
}

const mdp = dispatch => {
    return {
        receiveCurrentUser: (userId) => dispatch(receiveCUser(userId)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}


export default connect(msp, mdp)(ServerBar);