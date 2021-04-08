import React from 'react';
import { connect } from 'react-redux';
import { logout, reset } from '../../actions/session_actions';
import HomePage from './home';
import {receiveCUser} from '../../actions/user_action'
import {withRouter} from "react-router"
import {openModal} from "../../actions/modal_actions"
import { requestFriends } from "../../actions/friend_actions"


const msp = (state) => {
    return {
        currentUser: state.session.currentUser,
        friends: state.entities.friends
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        resetError: () => dispatch(reset()),
        receiveCurrentUser: userId => dispatch(receiveCUser(userId)),
        openModal: (modal) => dispatch(openModal(modal)),
        requestFriends: () => dispatch(requestFriends())
    }
};

export default withRouter(connect(msp, mdp)(HomePage));

