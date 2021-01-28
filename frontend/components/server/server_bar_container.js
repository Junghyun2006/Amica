import { connect } from "react-redux";
import ServerBar from "./server_bar";
import {receiveCUser} from "../../actions/user_action";

const msp = (state,ownProps) => {
    return {
        currentUser: state.session.currentUser
    }    
}

const mdp = dispatch => {
    return {
        receiveCurrentUser: (userId) => dispatch(receiveCUser(userId)),
    }
}


export default connect(msp, mdp)(ServerBar);