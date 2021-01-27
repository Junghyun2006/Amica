import { connect } from "react-redux";
import ServerBar from "./server_bar";
import {receiveCUser} from "../../actions/user_action"

const msp = (state) => {
    return {
        servers: state.session.currentUser.servers
    }    
}

const mdp = dispatch => {
    return {
    //     receiveCurrentUser: (userId) => dispatch(receiveCUser(userId)),
    }
}


export default connect(msp, null)(ServerBar);