// import { connect } from "react-redux";
// import { logout } from '../../actions/session_actions';
// import FriendIndex from '../../components/friend/friend_index';

// const msp = (state, ownProps) => {
//     return {
//         currentUser: state.session.currentUser,
//         ownProps
//     }
// }

// const mdp = dispatch => {
//     return {
//         requestServerChannels: (serverId) => dispatch(requestServerChannels(serverId)),
//         requestServers: () => dispatch(requestServers()),
//         openModal: (modal) => dispatch(openModal(modal)),
//         logout: () => dispatch(logout())
//     }
// }


// export default withRouter(connect(msp, mdp)(FriendIndex));